var Posts = (function () {
    function Posts() {
    }
    return Posts;
}());
Posts.ALL = [
    { filename: "04-06-2016", tags: ["underrated", "managers", "part", "3", "leonardo", "jardim"] },
    { filename: "04-11-2016", tags: ["shkodran", "mustafi", "good", "bad", "ugly"] }
];
Posts.WRITEUPS = [
    { filename: "04-06-2016", tags: ["underrated", "managers", "part", "3", "leonardo", "jardim"] },
    { filename: "04-11-2016", tags: ["shkodran", "mustafi", "good", "bad", "ugly"] }
];
Posts.PLAYERS = [
    { filename: "", tags: [""] }
];
Posts.BETTING = [
    { filename: "", tags: [""] }
];
var Website = (function () {
    function Website() {
        this.tabs = document.getElementsByClassName("tab");
        this.allTab = this.tabs[0];
        this.writeupsTab = this.tabs[1];
        this.playersTab = this.tabs[2];
        this.bettingTab = this.tabs[3];
        this.landing = document.getElementsByClassName("landing")[0];
        this.topBarWrapper = document.getElementsByClassName("topBarWrapper")[0];
        this.nav = document.getElementsByClassName("nav")[0];
        this.firstTab = this.nav.firstElementChild;
        this.searchWrapper = document.getElementsByClassName("searchWrapper")[0];
        this.search = document.getElementsByClassName("search")[0];
        this.searchField = document.getElementsByClassName("searchField")[0];
        this.fixedBarAnchor = document.getElementsByClassName("horizontalSeperator")[0];
        this.scroll = document.getElementsByClassName("scroll")[0];
        this.logo = document.getElementsByClassName("logo")[0];
        this.twitterIcon = document.getElementsByClassName("twitterIcon")[0];
        this.twitterIconWrapper = document.getElementsByClassName("twitterIconWrapper")[0];
        this.rightSideWrapper = document.getElementsByClassName("rightSideWrapper")[0];
        this.pageTitle = document.getElementsByClassName("pageTitle")[0];
        this.topBar = document.getElementsByClassName("topBar")[0];
        this.horizontalSeperator = document.getElementsByClassName("horizontalSeperator")[0];
        this.isFixed = false;
        this.preFixedTop = 0;
        this.posts = document.getElementsByClassName("posts")[0];
        this.postsLoaded = 0;
    }
    Website.prototype.main = function () {
        var _this = this;
        for (var i = 0; i < this.tabs.length; i++) {
            this.tabs[i].addEventListener("click", function (e) {
                var targetElement = e.target;
                if (!targetElement.classList.contains("tab")) {
                    targetElement = targetElement.parentElement;
                }
                window.location.href = "#content";
                window.location.search = "";
                _this.setActiveTab(targetElement);
            });
        }
        this.setActiveTab(this.allTab);
        window.addEventListener("scroll", function () { return _this.handleTopBarFix(); });
        this.searchField.addEventListener("keypress", function (e) {
            var keyCode = e.which || e.keyCode;
            if (keyCode !== 13) {
                return;
            }
            window.location.search = _this.searchField.value;
        });
    };
    Website.prototype.setActiveTab = function (clickedTab) {
        var _this = this;
        if (clickedTab === this.activeTab) {
            return;
        }
        if (this.activeTab) {
            this.activeTab.classList.remove("tab-active");
        }
        clickedTab.classList.add("tab-active");
        this.activeTab = clickedTab;
        var postsData = [];
        if (clickedTab === this.allTab) {
            postsData = Posts.ALL;
        }
        else if (clickedTab === this.writeupsTab) {
            postsData = Posts.WRITEUPS;
        }
        else if (clickedTab === this.playersTab) {
            postsData = Posts.PLAYERS;
        }
        else if (clickedTab === this.bettingTab) {
            postsData = Posts.BETTING;
        }
        var postCount = postsData.length;
        this.postLoadCount = postCount >= Website.POST_LOAD_COUNT ? Website.POST_LOAD_COUNT : postCount;
        this.posts.innerHTML = "";
        this.postsLoaded = 0;
        var loadingSpinner = this.createLoadingSpinner();
        this.posts.appendChild(loadingSpinner);
        var rawSearchTerm = window.location.search.substring(1).toLowerCase();
        var searchTerms = rawSearchTerm.split("%20");
        for (var i = 0; i < this.postLoadCount; i++) {
            if (!postsData[i]) {
                return;
            }
            var matchFound = true;
            for (var _i = 0, searchTerms_1 = searchTerms; _i < searchTerms_1.length; _i++) {
                var searchTerm = searchTerms_1[_i];
                var postTags = postsData[i].tags;
                var termMatchFound = false;
                for (var _a = 0, postTags_1 = postTags; _a < postTags_1.length; _a++) {
                    var tag = postTags_1[_a];
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
            this.httpRequest(Website.POSTS_DIRECTORY + postsData[i].filename + ".html", function (response) { return _this.loadArticle(response); });
        }
    };
    Website.prototype.handleTopBarFix = function () {
        var navTop = this.nav.offsetTop;
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
        this.landing.style.opacity = (1 - window.pageYOffset / window.innerHeight).toString();
    };
    Website.prototype.httpRequest = function (url, callback) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                callback(xmlHttp.responseText);
            }
        };
        xmlHttp.open("GET", url, true);
        xmlHttp.send(null);
    };
    Website.prototype.loadArticle = function (html) {
        this.posts.innerHTML += html;
        var footer = document.createElement("div");
        footer.classList.add("postFooter");
        footer.innerText = "Read More";
        this.posts.appendChild(footer);
        this.postsLoaded++;
        if (this.postsLoaded >= this.postLoadCount) {
            this.handlePostPostLoad();
        }
    };
    Website.prototype.createLoadingSpinner = function () {
        var wrapper = document.createElement("div");
        wrapper.classList.add("spinnerWrapper");
        var spinnerPart1 = document.createElement("div");
        spinnerPart1.classList.add("spinnerPart1");
        wrapper.appendChild(spinnerPart1);
        var spinnerPart2 = document.createElement("div");
        spinnerPart2.classList.add("spinnerPart2");
        wrapper.appendChild(spinnerPart2);
        var spinnerPart3 = document.createElement("div");
        spinnerPart3.classList.add("spinnerPart3");
        wrapper.appendChild(spinnerPart3);
        return wrapper;
    };
    Website.prototype.handlePostPostLoad = function () {
        this.posts.removeChild(this.posts.firstElementChild);
        var footers = document.getElementsByClassName("postFooter");
        var _loop_1 = function (i) {
            var footerElement = footers[i];
            footerElement.addEventListener("click", function () {
                if (footerElement.innerText === "Read More") {
                    footerElement.previousElementSibling.classList.add("post-expanded");
                    footerElement.innerText = "Read Less";
                }
                else {
                    footerElement.previousElementSibling.classList.remove("post-expanded");
                    footerElement.innerText = "Read More";
                }
            });
        };
        for (var i = 0; i < footers.length; i++) {
            _loop_1(i);
        }
        var links = document.getElementsByClassName("postHeaderLink");
        var _loop_2 = function (i) {
            var linkElement = links[i];
            linkElement.addEventListener("click", function () {
                var hiddenInputElement = linkElement.parentElement.lastElementChild;
                hiddenInputElement.classList.remove("hidden");
                hiddenInputElement.select();
                document.execCommand("copy");
                hiddenInputElement.classList.add("hidden");
            });
        };
        for (var i = 0; i < links.length; i++) {
            _loop_2(i);
        }
    };
    return Website;
}());
Website.LOCAL_SERVER = location.hostname === "localhost" || location.hostname === "127.0.0.1";
Website.POSTS_DIRECTORY = Website.LOCAL_SERVER ? "/josh-website/posts/" : "/intacttactic.github.io/posts/";
Website.ACTIVE_TAB_CLASS = "tab-active";
Website.FIXED_TOP_BAR_CLASS = "topBarWrapper-fixed";
Website.POST_LOAD_COUNT = 5;
var website = new Website();
website.main();
