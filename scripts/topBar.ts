class TopBar { 
	private nav = document.getElementsByClassName("nav")[0];
	private topBarWrapper = document.getElementsByClassName("topBarWrapper")[0];
	private rightSideWrapper = document.getElementsByClassName("rightSideWrapper")[0];
	private pageTitle = document.getElementsByClassName("pageTitle")[0];
	private logo = document.getElementsByClassName("logo")[0];
	private searchWrapper = document.getElementsByClassName("searchWrapper")[0];
	private search = document.getElementsByClassName("search")[0];
	private twitterIconWrapper = document.getElementsByClassName("twitterIconWrapper")[0];
	private twitterIcon = document.getElementsByClassName("twitterIcon")[0];
	private fixedBarAnchor = document.getElementsByClassName("horizontalSeperator")[0];
	private topBar = document.getElementsByClassName("topBar")[0];
	private landing = document.getElementsByClassName("landing")[0];
	private scroll = document.getElementsByClassName("scroll")[0];
	
	private isFixed = false;
	private preFixedTop = 0;

	constructor() {
		if (Browser.IS_CHROME) {
			this.twitterIcon.classList.add("twitterIcon-center");
		}

		if (Browser.IS_IOS) {
			this.topBar.classList.add("topbar-center");
		}
		
		window.addEventListener("scroll", () => this.fix());
		
		this.fix();
	}

	private fix() {	
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
		} else if (this.isFixed && this.preFixedTop > window.pageYOffset) {
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
}
