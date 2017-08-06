class TopBar { 
	private static readonly OPACITY_THRESHOLD = 0.1;

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
	private opacityOverlay = document.getElementsByClassName("opacityOverlay")[0] as HTMLElement;

	private preFixedTop = 0;
	private currentOpacity = 0;

	private initial = () => this.handleInitialFixState();
	private fix = () => this.handleFix();
	private unfix = () => this.handleUnfix();

	constructor() {
		if (Browser.IS_CHROME) {
			this.twitterIcon.classList.add("twitterIcon-center");
		}

		if (Browser.IS_IOS) {
			this.topBar.classList.add("topBar-center");
		}

		window.addEventListener("scroll", this.initial);
		this.handleInitialFixState();
	}

	// Later split into two methods for optimization purposes
	private handleInitialFixState(): void {
		const navTop = (this.nav as HTMLElement).offsetTop;
		
		if (navTop < window.pageYOffset) {
			this.preFixedTop = navTop;
			this.topBarWrapper.classList.add("topBarWrapper-fixed");
			this.rightSideWrapper.removeChild(this.pageTitle);
			this.topBarWrapper.removeChild(this.logo);
			this.searchWrapper.appendChild(this.search);
			this.twitterIconWrapper.appendChild(this.twitterIcon);
			this.fixedBarAnchor.appendChild(this.topBarWrapper);

			window.removeEventListener("scroll", this.initial);
			window.addEventListener("scroll", this.unfix);
		} else if (this.preFixedTop > window.pageYOffset) {
			this.topBarWrapper.classList.remove("topBarWrapper-fixed");
			this.rightSideWrapper.insertBefore(this.pageTitle, this.topBar);
			this.rightSideWrapper.appendChild(this.search);
			this.topBarWrapper.insertBefore(this.logo, this.rightSideWrapper);
			this.nav.appendChild(this.twitterIcon);
			this.landing.appendChild(this.topBarWrapper);
			this.landing.appendChild(this.scroll);

			window.removeEventListener("scroll", this.initial);
			window.addEventListener("scroll", this.fix);
		}
		
		this.updateOpacity();
	}

	private handleFix(): void {
		const navTop = (this.nav as HTMLElement).offsetTop;

		if (navTop < window.pageYOffset) {
			this.preFixedTop = navTop;
			this.topBarWrapper.classList.add("topBarWrapper-fixed");
			this.rightSideWrapper.removeChild(this.pageTitle);
			this.topBarWrapper.removeChild(this.logo);
			this.searchWrapper.appendChild(this.search);
			this.twitterIconWrapper.appendChild(this.twitterIcon);
			this.fixedBarAnchor.appendChild(this.topBarWrapper);

			window.removeEventListener("scroll", this.fix);
			window.addEventListener("scroll", this.unfix);
		}

		this.updateOpacity();
	}

	private handleUnfix(): void {
		if (this.preFixedTop > window.pageYOffset) {
			this.topBarWrapper.classList.remove("topBarWrapper-fixed");
			this.rightSideWrapper.insertBefore(this.pageTitle, this.topBar);
			this.rightSideWrapper.appendChild(this.search);
			this.topBarWrapper.insertBefore(this.logo, this.rightSideWrapper);
			this.nav.appendChild(this.twitterIcon);
			this.landing.appendChild(this.topBarWrapper);
			this.landing.appendChild(this.scroll);

			window.removeEventListener("scroll", this.unfix);
			window.addEventListener("scroll", this.fix);
		}

		this.updateOpacity();
	}

	private updateOpacity(): void {
		const newOpacity = window.pageYOffset / window.innerHeight;
		if (newOpacity > 0 && Math.abs(this.currentOpacity - newOpacity) < TopBar.OPACITY_THRESHOLD) {
			return; // avoid painting as much as possible as it causes scroll lag
		}
	
		this.currentOpacity = newOpacity;
		this.opacityOverlay.style.opacity = newOpacity.toString();	
	}
}
