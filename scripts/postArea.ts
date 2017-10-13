class PostObject {
	filename: string;
	html: string;
}

class PostArea {
	private static readonly LOCAL_SERVER = location.hostname === "localhost" || location.hostname === "127.0.0.1";
	private static readonly PREVIEWS_DIRECTORY = PostArea.LOCAL_SERVER ? "/josh-website/assets/previews/" : "/assets/previews/";
	private static readonly POSTS_DIRECTORY = PostArea.LOCAL_SERVER ? "/josh-website/assets/posts/" : "/assets/posts/";
	private static readonly ACTIVE_TAB_CLASS = "tab-active";
	private static readonly FIXED_TOP_BAR_CLASS = "topBarWrapper-fixed";
	private static readonly POST_LOAD_COUNT = 5;

	private posts = document.getElementsByClassName("posts")[0];
	private secondMobileAd = document.getElementsByClassName("mobileAdWrapper")[1];
	private resultsFound = document.getElementsByClassName("resultsFound")[0];
	private pageIconContainer = document.getElementsByClassName("pageIconContainer")[0];
	private postContainers: HTMLElement[] = [];
	private postsLoadingIcon = new LoadingIcon(this.posts as HTMLElement);
	private activePageIndex = 0;

	private previewsLoadedCount = 0;
	private previewsToLoadCount: number;
	private loadedPreviews: {element: HTMLElement, i: number}[];
	private rawPreviewsToLoadCount: number;
	private matches: string[];
	private postsData: PostData[];
	private outstandingLoads = 0;
	private loadCompletedThroughExistingMemory = false

	private previewsInMemory: PostObject[] = [];

	private isBettingPage: boolean;

	constructor() {
		for (let i = 0; i < PostArea.POST_LOAD_COUNT; i++) {
			const container = document.createElement("div");
			container.classList.add("postContainer");
			this.posts.insertBefore(container, this.pageIconContainer);
			this.postContainers.push(container);
		}
	}

	public setPostsData(postsData: PostData[], isBettingPage = false): void {
		this.postsData = postsData;
		this.isBettingPage = isBettingPage;
	}

	public load(skipPreLoad = false, startIndex = 0): void {
		this.emptyPage();

		const queryString = window.location.search;
		if (queryString.indexOf("d=") === 1) {
			const isBettingPageLink = queryString.indexOf("d=b") === 1;
			const postSource = isBettingPageLink ? Posts.BETTING : this.postsData;

			const link =  window.location.search.substring(3).toLowerCase();
			for (const post of postSource) {
				if (post.filename === link) {
					this.httpRequest(PostArea.PREVIEWS_DIRECTORY + post.filename + ".html", (response: string) => this.loadDirectPost(response, post.filename));
				}
			}

			return; // Its a direct link so standard setup is not required
		}

		if (!skipPreLoad) {
			this.activePageIndex = 0;
			this.preLoad();
		}

		if (this.matches && this.matches.length > 0 && this.matches[0] !== ".html") {
			this.postsLoadingIcon.appendBefore(this.secondMobileAd);
			this.requestContent(startIndex);
		} else {
			this.resultsFound.classList.remove("hidden");
		}
	}

	private emptyPage(): void {
		for (let i = 0; i < this.postContainers.length; i++) {
			this.postContainers[i].innerHTML = "";
			this.previewsLoadedCount = 0;
			this.loadedPreviews = [];
		}

		this.resultsFound.classList.add("hidden");
		this.pageIconContainer.innerHTML = "";
		
		this.rawPreviewsToLoadCount = this.rawPreviewsToLoadCount = this.postsData.length;
		this.previewsToLoadCount = this.rawPreviewsToLoadCount >= PostArea.POST_LOAD_COUNT ? PostArea.POST_LOAD_COUNT : this.rawPreviewsToLoadCount;
		this.loadCompletedThroughExistingMemory = false;
	}

	private preLoad(): void {
		const rawSearchTerm = window.location.search.substring(3).toLowerCase();
		
		let searchTerms: string[] = [];
		if (rawSearchTerm) {
			searchTerms = rawSearchTerm.split("%20");
		}
		
		this.matches = [];
		let searchAdjustedPreviewsToLoadCount = this.rawPreviewsToLoadCount;
		for (let i = 0; i < this.rawPreviewsToLoadCount; i++) {
			if (!this.postsData[i]) {
				return;
			}
			
			let matchFound = true;

			for (const searchTerm of searchTerms) {
				const postTags = this.postsData[i].tags;

				let termMatchFound = false;
				for (const tag of postTags) {
					if (tag.indexOf(searchTerm) > -1) {
						termMatchFound = true;
						break;
					}
				}

				if (!termMatchFound) {
					matchFound = false;
					break;
				}
			}
			
			if (!matchFound) {
				searchAdjustedPreviewsToLoadCount--;
				if (this.previewsLoadedCount >= searchAdjustedPreviewsToLoadCount) {
					this.handleAfterPreviewLoad();
				}
				
				continue;
			}

			this.matches.unshift(this.postsData[i].filename + ".html");
		}
	}

	private requestContent(startIndex: number): void {
		for (let i = startIndex; i < startIndex + PostArea.POST_LOAD_COUNT; i++) {
			if (this.loadCompletedThroughExistingMemory) {
				return;
			}
			
			if (!this.matches[i]) {
				this.previewsToLoadCount = i - startIndex;
				if (this.outstandingLoads === 0 && this.previewsLoadedCount >= this.previewsToLoadCount) {
					this.handleAfterPreviewLoad();
				}

				return;
			}
			
			let previewFoundInMemory: PostObject;
			for (const previewInMemory of this.previewsInMemory) {
				if (previewInMemory.filename === this.matches[i]) {
					previewFoundInMemory = previewInMemory;
					break;
				}
			}

			if (previewFoundInMemory) {
				this.loadPreviews(previewFoundInMemory.html, i, i - startIndex);
			} else {
				this.outstandingLoads++;
				this.httpRequest(PostArea.PREVIEWS_DIRECTORY + this.matches[i], (response: string) => {
					this.loadPreviews(response, i, i - startIndex, this.matches[i]);
					this.outstandingLoads--;
				});
			}
		}
	}

	private loadPreviews(html: string, rawIndex: number, index: number, filename?: string): void {
		if (filename) {
			this.previewsInMemory.unshift({filename: filename, html: html});
		}

		const postWrapper = document.createElement("div");
		postWrapper.classList.add("postWrapper");
		
		const indexElement = document.createElement("span");
		indexElement.classList.add("hidden");
		indexElement.innerText = rawIndex.toString();
		postWrapper.appendChild(indexElement);
		
		postWrapper.innerHTML += html;

		// Betting page does not have a proper footer as the posts are pre-expanded
		const footer = document.createElement("div");
		if (!this.isBettingPage) {
			footer.classList.add("postFooter");
			footer.innerText = "Read More";
		}	
		else {
			footer.classList.add("postFullPageFooter");
		}
		postWrapper.appendChild(footer);

		this.loadedPreviews.unshift({element: postWrapper, i: index});
		this.previewsLoadedCount++;

		if (this.previewsLoadedCount >= this.previewsToLoadCount) {
			this.handleAfterPreviewLoad();
			this.loadCompletedThroughExistingMemory = true;
		}
	}

	private handleAfterPreviewLoad(): void {
		this.postsLoadingIcon.remove();

		for (const loadedPreview of this.loadedPreviews) {
			this.postContainers[loadedPreview.i].appendChild(loadedPreview.element);
		}

		// Betting page is pre-expanded
		if (!this.isBettingPage) {
			const footers = document.getElementsByClassName("postFooter");
			for (let i = 0; i < footers.length; i++) {
				const footerElement = footers[i] as HTMLElement;
				footerElement.addEventListener("click", () => this.togglePostExpansion(footerElement));
			}	
		}

		const links = document.getElementsByClassName("postHeaderLink");
		for (let i = 0; i < links.length; i++) {
			const linkElement = links[i] as HTMLElement;
			linkElement.addEventListener("click", (e) => this.handleLinkClick(e.target as HTMLElement));
		}

		const rawPreviewCount = (window.location.search && window.location.search !== "") ? this.matches.length : this.rawPreviewsToLoadCount; 
		const pagesRequiredCount = Math.ceil(rawPreviewCount / PostArea.POST_LOAD_COUNT);
		for (let i = 0; i < pagesRequiredCount; i++) {
			const pageIcon = document.createElement("span");
			pageIcon.classList.add("pageIcon");
			pageIcon.innerText = (i + 1).toString();
			this.pageIconContainer.appendChild(pageIcon);

			if (i === this.activePageIndex) {
				pageIcon.classList.add("pageIcon-active");
			}

			pageIcon.addEventListener("click", (e: Event) => { 
				const clickedNumber = (e.target as HTMLElement).innerText;
				
				this.activePageIndex = +clickedNumber - 1;
				this.load(true, this.activePageIndex * PostArea.POST_LOAD_COUNT);
			});
		}
	}

	private handleLinkClick(linkElement: HTMLElement): void {
		const hiddenInputElement = linkElement.parentElement.parentElement.parentElement.lastElementChild as HTMLInputElement;

		if (Browser.IS_IOS) {	
			prompt("Copy the link below:", hiddenInputElement.value);
		}
		else {
			hiddenInputElement.classList.remove("hiddenInput");
			hiddenInputElement.select();	
			document.execCommand("copy");
			hiddenInputElement.classList.add("hiddenInput");

			linkElement.classList.add("hidden");

			const tick = linkElement.nextElementSibling;
			tick.classList.remove("hidden");
			setTimeout(() => {
				linkElement.classList.remove("hidden");
				tick.classList.add("hidden");
			}, 1000);
		}
	}

	private togglePostExpansion(footerElement: HTMLElement): void {
		const parentElement = footerElement.parentElement;
		const postIndex = +(parentElement.firstElementChild as HTMLElement).innerText;
		const postContent = parentElement.getElementsByClassName("content")[0] as HTMLElement;
		
		if (footerElement.innerText === "Read More") {
			footerElement.innerText = "Read Less";

			if (postContent.innerHTML === "") {
				this.httpRequest(PostArea.POSTS_DIRECTORY + this.matches[postIndex], (response: string) => this.loadPostContent(response, postContent));
			} else {
				postContent.classList.remove("hidden");
			}
		} else {
			footerElement.innerText = "Read More";
			postContent.classList.add("hidden");
		}
	}

	private loadPostContent(html: string, postBody: HTMLElement): void {
		postBody.innerHTML += html;
	}
	
	private loadDirectPost(html: string, filename: string): void {
		const postWrapper = document.createElement("div");
		postWrapper.classList.add("postWrapper");	
		postWrapper.innerHTML += html;
		
		const footer = document.createElement("div");
		footer.classList.add("postFullPageFooter");
		postWrapper.appendChild(footer);
		
		this.postContainers[0].appendChild(postWrapper);
		
		const directory = this.isBettingPage ? PostArea.PREVIEWS_DIRECTORY : PostArea.POSTS_DIRECTORY;
		this.httpRequest(directory + filename + ".html", (response: string) => this.loadPostContent(response, postWrapper.getElementsByClassName("content")[0] as HTMLElement));

		const linkElement = postWrapper.getElementsByClassName("postHeaderLink")[0];
		linkElement.addEventListener("click", (e) => this.handleLinkClick(e.target as HTMLElement));
	}
	
	private httpRequest(url: string, callback: (response: string) => void): void {
		const xmlHttp = new XMLHttpRequest();
		xmlHttp.onreadystatechange = () => { 
	        	if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
	        	    	callback(xmlHttp.responseText);
			}
	    	}
	    	xmlHttp.open("GET", url, true); 
	    	xmlHttp.send(null);
	}
}
