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
var nav = document.getElementsByClassName("nav")[0];
var firstTab = nav.firstElementChild;
var searchWrapper = document.getElementsByClassName("searchWrapper")[0];
var search = document.getElementsByClassName("search")[0];
var fixedBarAnchor = document.getElementsByClassName("horizontalSeperator")[0];
var scroll = document.getElementsByClassName("scroll")[0];
var logo = document.getElementsByClassName("logo")[0];
var twitterIcon = document.getElementsByClassName("twitterIcon")[0];
var twitterIconWrapper = document.getElementsByClassName("twitterIconWrapper")[0];
var rightSideWrapper = document.getElementsByClassName("rightSideWrapper")[0];
var isFixed = false;
var preFixedTop = 0;
window.addEventListener("scroll", function() {
	var navTop = nav.offsetTop;
	if (!isFixed && navTop < window.pageYOffset) {
		isFixed = true;
		preFixedTop = navTop;
		topBarWrapper.classList.add("topBarWrapper-fixed");
		searchWrapper.appendChild(logo);
		searchWrapper.appendChild(search);
		twitterIconWrapper.appendChild(twitterIcon);
		fixedBarAnchor.appendChild(topBarWrapper);
		console.log("fixed");	
	}
	else if (isFixed && preFixedTop > window.pageYOffset) {
		isFixed = false;
		topBarWrapper.classList.remove("topBarWrapper-fixed");
		rightSideWrapper.appendChild(search);
		topBarWrapper.insertBefore(logo, rightSideWrapper);
		nav.appendChild(twitterIcon);
		landing.appendChild(topBarWrapper);
		landing.appendChild(scroll);
		console.log("unfixed");
	}

	var displayHeight = window.innerHeight;
	landing.style.opacity = 1 - this.pageYOffset / displayHeight;	
});


// if post.scrollHeight > 300, append an overlay and the read more button
