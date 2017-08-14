class NavBar {
	private tabs = document.getElementsByClassName("tab");
	private allTab = this.tabs[0];
	private writeupsTab = this.tabs[1];
	private playersTab = this.tabs[2];
	private bettingTab = this.tabs[3];
	private activeTab: Element;
	
	private horizontalSeperator = document.getElementsByClassName("horizontalSeperator")[0];
	
	private postArea = new PostArea();

	constructor() {
		for (let i = 0; i < this.tabs.length; i++) {
			this.tabs[i].addEventListener("click", (e: Event) => {
				let targetElement = e.target as HTMLElement;
				if (!targetElement.classList.contains("tab")) {
					targetElement = targetElement.parentElement;	
				}

				window.location.href = "#c";
				window.location.search = "";
				this.setActiveTab(targetElement);
			});	
		}

		this.setActiveTab(this.allTab as HTMLElement);
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

		let postsData: PostData[] = [];
		if (clickedTab === this.allTab) {
			postsData = Posts.ALL;
		} else if (clickedTab === this.writeupsTab) {
			postsData = Posts.WRITEUPS;
		} else if (clickedTab === this.playersTab) {
			postsData = Posts.PLAYERS;
		} else if (clickedTab === this.bettingTab) {
			postsData = Posts.BETTING;
		}
		
		this.postArea.setPostsData(postsData);
		this.postArea.load();	
	}	
}
