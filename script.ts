class Website {
	private static readonly LOCAL_SERVER = location.hostname === "localhost" || location.hostname === "127.0.0.1";
	private static readonly POSTS_DIRECTORY = Website.LOCAL_SERVER ? "/josh-website/posts/" : "/posts/";
	private static readonly ACTIVE_TAB_CLASS = "tab-active";
	private static readonly FIXED_TOP_BAR_CLASS = "topBarWrapper-fixed";
	private static readonly POST_LOAD_COUNT = 5;

	private tabs = document.getElementsByClassName("tab");
	private allTab = this.tabs[0];
	private writeupsTab = this.tabs[1];
	private playersTab = this.tabs[2];
	private bettingTab = this.tabs[3];
	private activeTab: Element;

	private landing = document.getElementsByClassName("landing")[0];
	private topBarWrapper = document.getElementsByClassName("topBarWrapper")[0];
	private nav = document.getElementsByClassName("nav")[0];
	private firstTab = this.nav.firstElementChild;
	private searchWrapper = document.getElementsByClassName("searchWrapper")[0];
	private search = document.getElementsByClassName("search")[0];
	private searchField: HTMLInputElement = document.getElementsByClassName("searchField")[0] as HTMLInputElement;
	private fixedBarAnchor = document.getElementsByClassName("horizontalSeperator")[0];
	private scroll = document.getElementsByClassName("scroll")[0];
	private logo = document.getElementsByClassName("logo")[0];
	private twitterIcon = document.getElementsByClassName("twitterIcon")[0];
	private twitterIconWrapper = document.getElementsByClassName("twitterIconWrapper")[0];
	private rightSideWrapper = document.getElementsByClassName("rightSideWrapper")[0];
	private pageTitle = document.getElementsByClassName("pageTitle")[0];
	private topBar = document.getElementsByClassName("topBar")[0];
	private horizontalSeperator = document.getElementsByClassName("horizontalSeperator")[0];
	private isFixed = false;
	private preFixedTop = 0;
	
	private posts = document.getElementsByClassName("posts")[0];
	private postLoadCount: number;
	private postsLoaded = 0;

	public main() {
		for (let i = 0; i < this.tabs.length; i++) {
			this.tabs[i].addEventListener("click", (e: Event) => {
				let targetElement = e.target as HTMLElement;
				if (!targetElement.classList.contains("tab")) {
					targetElement = targetElement.parentElement;	
				}

				window.location.href = "#content";
				window.location.search = "";
				this.setActiveTab(targetElement);
			});	
		}
		this.setActiveTab(this.allTab as HTMLElement);

		window.addEventListener("scroll", () => this.handleTopBarFix());

		this.searchField.addEventListener("keypress", (e: KeyboardEvent) => {
			const keyCode = e.which || e.keyCode;
			if (keyCode !== 13) {
				return;
			}
			
			window.location.search = this.searchField.value;
		});
	}

	private setActiveTab(clickedTab: HTMLElement) {
		if (clickedTab === this.activeTab) {
			return;
		}
		
		if (this.activeTab) {
			this.activeTab.classList.remove("tab-active");
		}

		clickedTab.classList.add("tab-active");
		this.activeTab = clickedTab;

		let postsData: {filename: string, tags: string[]}[] = [];
		if (clickedTab === this.allTab) {
			postsData = Posts.ALL;
		} else if (clickedTab === this.writeupsTab) {
			postsData = Posts.WRITEUPS;
		} else if (clickedTab === this.playersTab) {
			postsData = Posts.PLAYERS;
		} else if (clickedTab === this.bettingTab) {
			postsData = Posts.BETTING;
		}
		
		const postCount = postsData.length;
		this.postLoadCount = postCount >= Website.POST_LOAD_COUNT ? Website.POST_LOAD_COUNT : postCount;

		this.posts.innerHTML = "";
		this.postsLoaded = 0;
		
		const loadingSpinner = this.createLoadingSpinner();
		this.posts.appendChild(loadingSpinner);
		
		const rawSearchTerm = window.location.search.substring(1).toLowerCase();
		const searchTerms = rawSearchTerm.split("%20");
		
		for (let i = 0; i < this.postLoadCount; i++) {
			if (!postsData[i]) {
				return;
			}

			let matchFound = true;
			for (const searchTerm of searchTerms) {
				const postTags = postsData[i].tags;

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
				this.postsLoaded++;
				if (this.postsLoaded >= this.postLoadCount) {
					this.handlePostPostLoad();
				}
				
				continue;
			}

			this.httpRequest(Website.POSTS_DIRECTORY + postsData[i].filename + ".html", (response: string) => this.loadArticle(response));
		}
	}

	private handleTopBarFix() {	
		const navTop = (this.nav as HTMLElement).offsetTop;
		
		if (!this.isFixed && navTop < window.pageYOffset) {
			this.isFixed = true;
			this.preFixedTop = navTop;
			this.topBarWrapper.classList.add("topBarWrapper-fixed");
			this.rightSideWrapper.removeChild(this.pageTitle);
			this.topBarWrapper.removeChild(this.logo);
			this.searchWrapper.appendChild(this.search);
			this.twitterIconWrapper.appendChild(this.twitterIcon);
			this.fixedBarAnchor.appendChild(this.topBarWrapper);
		}
		else if (this.isFixed && this.preFixedTop > window.pageYOffset) {
			this.isFixed = false;
			this.topBarWrapper.classList.remove("topBarWrapper-fixed");
			this.rightSideWrapper.insertBefore(this.pageTitle, this.topBar);
			this.rightSideWrapper.appendChild(this.search);
			this.topBarWrapper.insertBefore(this.logo, this.rightSideWrapper);
			this.nav.appendChild(this.twitterIcon);
			this.landing.appendChild(this.topBarWrapper);
			this.landing.appendChild(this.scroll);
		}
	
		(this.landing as HTMLElement).style.opacity = (1 - window.pageYOffset / window.innerHeight).toString();	
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

	private loadArticle(html: string): void {
		this.posts.innerHTML += html;

		const footer = document.createElement("div");
		footer.classList.add("postFooter");
		footer.innerText = "Read More";
		this.posts.appendChild(footer);

		this.postsLoaded++;

		if (this.postsLoaded >= this.postLoadCount) {
			this.handlePostPostLoad();
		}
	}

	private createLoadingSpinner(): HTMLElement {
		const wrapper = document.createElement("div");
		wrapper.classList.add("spinnerWrapper");

		const spinnerPart1 = document.createElement("div");
		spinnerPart1.classList.add("spinnerPart1");
		wrapper.appendChild(spinnerPart1);
		
		const spinnerPart2 = document.createElement("div");
		spinnerPart2.classList.add("spinnerPart2");
		wrapper.appendChild(spinnerPart2);
		
		const spinnerPart3 = document.createElement("div");
		spinnerPart3.classList.add("spinnerPart3");
		wrapper.appendChild(spinnerPart3);

		return wrapper;
	}

	private handlePostPostLoad(): void {
		this.posts.removeChild(this.posts.firstElementChild);

		const footers = document.getElementsByClassName("postFooter");
		for (let i = 0; i < footers.length; i++) {
			const footerElement = footers[i] as HTMLElement;
			footerElement.addEventListener("click", () => {
				if (footerElement.innerText === "Read More") {
					footerElement.previousElementSibling.classList.add("post-expanded");
					footerElement.innerText = "Read Less";
				}
				else {
					footerElement.previousElementSibling.classList.remove("post-expanded");
					footerElement.innerText = "Read More";
				}
			});
		}	
				
		const links = document.getElementsByClassName("postHeaderLink");
		for (let i = 0; i < links.length; i++) {
			const linkElement = links[i] as HTMLElement;
			linkElement.addEventListener("click", () => {
				const hiddenInputElement = linkElement.parentElement.lastElementChild as HTMLInputElement;
				hiddenInputElement.classList.remove("hidden");
				hiddenInputElement.select();
				document.execCommand("copy");
				hiddenInputElement.classList.add("hidden");
			});
		}
	}
}

const website = new Website();
website.main();
