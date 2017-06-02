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
var topBar = document.getElementsByClassName("topBar")[0];
var nav = document.getElementsByClassName("nav")[0];
var search = document.getElementsByClassName("search")[0];
var twitterIcon = document.getElementsByClassName("twitterIcon")[0];
var anchor = document.getElementsByClassName("horizontalSeperator")[0];
var scroll = document.getElementsByClassName("scroll")[0];
var banner = document.getElementsByClassName("banner")[0];
var isTopBarFixed = false;
var preFixedTop = 0;
window.addEventListener("scroll", function() {
	var topBarTop = topBar.offsetTop;
	if (!isTopBarFixed && topBarTop < window.pageYOffset) {
		isTopBarFixed = true;
		preFixedTop = topBarTop;
		topBar.classList.add("topBar-fixed");
		search.classList.add("search-compact");
		nav.insertBefore(search, twitterIcon);
		anchor.appendChild(topBar);
		console.log("fixed");	
	}
	else if (isTopBarFixed && preFixedTop > window.pageYOffset) {
		isTopBarFixed = false;
		topBar.classList.remove("topBar-fixed");
		search.classList.remove("search-compact");
		topBar.appendChild(search);
		banner.insertBefore(topBar, scroll);
		console.log("unfixed");
	}

	var displayHeight = window.innerHeight;
	landing.style.opacity = 1 - this.pageYOffset / displayHeight;	
});

