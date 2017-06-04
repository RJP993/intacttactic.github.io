var tabs = document.getElementsByClassName("tab");
var activeTab = tabs[0];
for (var i = 0; i < tabs.length; i++) {
	var tab = tabs[i];
	tab.addEventListener("click", function() {
		if (this === activeTab) {
			return;
		}
		
		if (activeTab) {
			activeTab.classList.remove("tab-active");
		}
	
		this.classList.add("tab-active");
		activeTab = this;
	});
}

var landing = document.getElementsByClassName("landing")[0];
var topBarWrapper = document.getElementsByClassName("topBarWrapper")[0];
var topBar = document.getElementsByClassName("topBar")[0];
var nav = document.getElementsByClassName("nav")[0];
var firstTab = nav.firstElementChild;
var search = document.getElementsByClassName("search")[0];
var anchor = document.getElementsByClassName("horizontalSeperator")[0];
var scroll = document.getElementsByClassName("scroll")[0];
var banner = document.getElementsByClassName("banner")[0];
var logo = document.getElementsByClassName("logo")[0];
var twitterIcon = document.getElementsByClassName("twitterIcon")[0];
var isFixed = false;
var preFixedTop = 0;
window.addEventListener("scroll", function() {
	var navTop = nav.offsetTop;
	if (!isFixed && navTop < window.pageYOffset) {
		isFixed = true;
		preFixedTop = navTop;
		topBarWrapper.classList.add("topBarWrapper-fixed");
		topBar.classList.add("topBar-compact");
		search.classList.add("search-compact");
		logo.classList.add("logo-compact");
		nav.insertBefore(search, twitterIcon);
		nav.insertBefore(logo, firstTab);
		anchor.appendChild(topBarWrapper);
		console.log("fixed");	
	}
	else if (isFixed && preFixedTop > window.pageYOffset) {
		isFixed = false;
		topBarWrapper.classList.remove("topBarWrapper-fixed");
		topBar.classList.remove("topBar-compact");
		search.classList.remove("search-compact");
		logo.classList.remove("logo-compact");
		topBarWrapper.appendChild(search);
		banner.insertBefore(topBarWrapper, scroll);
		topBar.insertBefore(logo, nav);
		console.log("unfixed");
	}

	var displayHeight = window.innerHeight;
	landing.style.opacity = 1 - this.pageYOffset / displayHeight;	
});

