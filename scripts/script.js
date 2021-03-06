var PostData = /** @class */ (function () {
    function PostData() {
    }
    return PostData;
}());
var Posts = /** @class */ (function () {
    function Posts() {
    }
    Posts.ALL = [
        { filename: "03-01-2015", tags: ["underrated", "managers", "part", "1", "unai", "emery", "simplicity", "scouting"] },
        { filename: "16-01-2015", tags: ["underrated", "managers", "part", "2", "francesco", "guidolin", "overachieving", "expectations"] },
        { filename: "04-06-2016", tags: ["underrated", "managers", "part", "3", "leonardo", "jardim", "complete", "manager"] },
        { filename: "04-11-2016", tags: ["shkodran", "mustafi", "in-depth", "analysis", "good", "bad", "ugly"] },
        { filename: "11-08-2017", tags: ["direction", "intacttactic", "welcome", "new", "site"] },
        { filename: "11-08-2017-2", tags: ["arsenal", "2017/18", "breakdown", "3-4-2-1"] },
        { filename: "12-08-2017", tags: ["napoli", "2017/18", "breakdown", "time", "title", "juventus", "ac milan", "roma"] },
        { filename: "12-08-2017-2", tags: ["bernardo", "silva", "analysis", "overpriced", "underwhelming"] },
        { filename: "13-08-2017", tags: ["west", "ham", "2017/18", "breakdown", "short", "term", "improvement"] },
        { filename: "14-08-2017", tags: ["jean", "michael", "seri", "analysis", "best", "player", "average", "fan", "see"] },
        { filename: "15-08-2017", tags: ["borussia", "dortmund", "analysis", "win", "anything", "kids"] },
        { filename: "16-08-2017", tags: ["pedro", "rodriguez", "analysis", "intelligence", "flair"] },
        { filename: "17-08-2017", tags: ["premier", "league", "table", "prediction", "transfer", "discussion", "miss", "big", "sam"] },
        { filename: "23-08-2017", tags: ["alex", "oxlade", "chamberlain", "ox", "analysis", "dribbling", "without", "plan"] },
        { filename: "25-08-2017", tags: ["ben", "gibson", "analysis", "england", "best", "central", "defender"] },
        { filename: "27-08-2017", tags: ["chelsea", "everton", "tactical", "analysis", "gueye", "no-man", "land"] },
        { filename: "07-09-2017", tags: ["analysing", "centre", "backs", "part", "1", "front", "foot", "defending", "biggest", "misconception"] },
        { filename: "11-09-2017", tags: ["analysing", "centre", "backs", "part", "2", "ball", "playing", "risk", "vs", "reward"] },
    ];
    Posts.WRITEUPS = [
        { filename: "03-01-2015", tags: ["underrated", "managers", "part", "1", "unai", "emery", "simplicity", "scouting"] },
        { filename: "16-01-2015", tags: ["underrated", "managers", "part", "2", "francesco", "guidolin", "overachieving", "expectations"] },
        { filename: "04-06-2016", tags: ["underrated", "managers", "part", "3", "leonardo", "jardim", "complete", "manager"] },
        { filename: "11-08-2017-2", tags: ["arsenal", "2017/18", "breakdown", "3-4-2-1"] },
        { filename: "12-08-2017", tags: ["napoli", "2017/18", "breakdown", "time", "title", "juventus", "ac milan", "roma"] },
        { filename: "13-08-2017", tags: ["west", "ham", "2017/18", "breakdown", "short", "term", "improvement"] },
        { filename: "15-08-2017", tags: ["borussia", "dortmund", "analysis", "win", "anything", "kids"] },
        { filename: "17-08-2017", tags: ["premier", "league", "table", "prediction", "transfer", "discussion", "miss", "big", "sam"] },
        { filename: "27-08-2017", tags: ["chelsea", "everton", "tactical", "analysis", "gueye", "no-man", "land"] },
        { filename: "07-09-2017", tags: ["analysing", "centre", "backs", "part", "1", "front", "foot", "defending", "biggest", "misconception"] },
        { filename: "11-09-2017", tags: ["analysing", "centre", "backs", "part", "2", "ball", "playing", "risk", "vs", "reward"] },
    ];
    Posts.PLAYERS = [
        { filename: "04-11-2016", tags: ["shkodran", "mustafi", "in-depth", "analysis", "good", "bad", "ugly"] },
        { filename: "12-08-2017-2", tags: ["bernardo", "silva", "analysis", "overpriced", "underwhelming"] },
        { filename: "14-08-2017", tags: ["jean", "michael", "seri", "analysis", "best", "player", "average", "fan", "see"] },
        { filename: "16-08-2017", tags: ["pedro", "rodriguez", "analysis", "intelligence", "flair"] },
        { filename: "23-08-2017", tags: ["alex", "oxlade", "chamberlain", "ox", "analysis", "dribbling", "without", "plan"] },
        { filename: "25-08-2017", tags: ["ben", "gibson", "analysis", "england", "best", "central", "defender"] },
    ];
    Posts.BETTING = [
        //	{ filename: "b13-10-2017", tags: [""] },
        //    { filename: "b20-10-2017", tags: [""] },
        //    { filename: "b27-10-2017", tags: [""] },
        // New betting posts must go before this but after the next highest up one
        { filename: "broll", tags: [""] }
    ];
    return Posts;
}());
var Browser = /** @class */ (function () {
    function Browser() {
    }
    Browser.IS_OPERA = window.navigator.userAgent.indexOf("OPR") > -1;
    Browser.IS_EDGE = window.navigator.userAgent.indexOf("Edge") > -1;
    Browser.IS_IOS = /iPad|iPhone|iPod/.test(window.navigator.userAgent) && !window.MSStream;
    Browser.IS_IOS_CHROME = window.navigator.userAgent.match("CriOS");
    Browser.IS_CHROME = window.chrome !== null && window.chrome !== undefined && window.navigator.vendor === "Google Inc." && !Browser.IS_OPERA && !Browser.IS_EDGE;
    return Browser;
}());
var LoadingIcon = /** @class */ (function () {
    function LoadingIcon(parentElement) {
        this.parentElement = parentElement;
        var wrapper = this.wrapper = document.createElement("div");
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
    }
    LoadingIcon.prototype.append = function () {
        this.parentElement.appendChild(this.wrapper);
    };
    LoadingIcon.prototype.appendBefore = function (element) {
        this.parentElement.insertBefore(this.wrapper, element);
    };
    LoadingIcon.prototype.remove = function () {
        if (!this.parentElement.contains(this.wrapper)) {
            return;
        }
        this.parentElement.removeChild(this.wrapper);
    };
    return LoadingIcon;
}());
var PostObject = /** @class */ (function () {
    function PostObject() {
    }
    return PostObject;
}());
var PostArea = /** @class */ (function () {
    function PostArea() {
        this.posts = document.getElementsByClassName("posts")[0];
        this.secondMobileAd = document.getElementsByClassName("mobileAdWrapper")[1];
        this.resultsFound = document.getElementsByClassName("resultsFound")[0];
        this.pageIconContainer = document.getElementsByClassName("pageIconContainer")[0];
        this.postContainers = [];
        this.postsLoadingIcon = new LoadingIcon(this.posts);
        this.activePageIndex = 0;
        this.previewsLoadedCount = 0;
        this.outstandingLoads = 0;
        this.loadCompletedThroughExistingMemory = false;
        this.previewsInMemory = [];
        for (var i = 0; i < PostArea.POST_LOAD_COUNT; i++) {
            var container = document.createElement("div");
            container.classList.add("postContainer");
            this.posts.insertBefore(container, this.pageIconContainer);
            this.postContainers.push(container);
        }
    }
    PostArea.prototype.setPostsData = function (postsData, isBettingPage) {
        if (isBettingPage === void 0) { isBettingPage = false; }
        this.postsData = postsData;
        this.isBettingPage = isBettingPage;
    };
    PostArea.prototype.load = function (skipPreLoad, startIndex) {
        var _this = this;
        if (skipPreLoad === void 0) { skipPreLoad = false; }
        if (startIndex === void 0) { startIndex = 0; }
        this.emptyPage();
        var queryString = window.location.search;
        if (queryString.indexOf("d=") === 1) {
            var isBettingPageLink = queryString.indexOf("d=b") === 1;
            var postSource = isBettingPageLink ? Posts.BETTING : this.postsData;
            var link = window.location.search.substring(3).toLowerCase();
            var _loop_1 = function (post) {
                if (post.filename === link) {
                    this_1.httpRequest(PostArea.PREVIEWS_DIRECTORY + post.filename + ".html", function (response) { return _this.loadDirectPost(response, post.filename); });
                }
            };
            var this_1 = this;
            for (var _i = 0, postSource_1 = postSource; _i < postSource_1.length; _i++) {
                var post = postSource_1[_i];
                _loop_1(post);
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
        }
        else {
            this.resultsFound.classList.remove("hidden");
        }
    };
    PostArea.prototype.emptyPage = function () {
        for (var i = 0; i < this.postContainers.length; i++) {
            this.postContainers[i].innerHTML = "";
            this.previewsLoadedCount = 0;
            this.loadedPreviews = [];
        }
        this.resultsFound.classList.add("hidden");
        this.pageIconContainer.innerHTML = "";
        this.rawPreviewsToLoadCount = this.rawPreviewsToLoadCount = this.postsData.length;
        this.previewsToLoadCount = this.rawPreviewsToLoadCount >= PostArea.POST_LOAD_COUNT ? PostArea.POST_LOAD_COUNT : this.rawPreviewsToLoadCount;
        this.loadCompletedThroughExistingMemory = false;
    };
    PostArea.prototype.preLoad = function () {
        var rawSearchTerm = window.location.search.substring(3).toLowerCase();
        var searchTerms = [];
        if (rawSearchTerm) {
            searchTerms = rawSearchTerm.split("%20");
        }
        this.matches = [];
        var searchAdjustedPreviewsToLoadCount = this.rawPreviewsToLoadCount;
        for (var i = 0; i < this.rawPreviewsToLoadCount; i++) {
            if (!this.postsData[i]) {
                return;
            }
            var matchFound = true;
            for (var _i = 0, searchTerms_1 = searchTerms; _i < searchTerms_1.length; _i++) {
                var searchTerm = searchTerms_1[_i];
                var postTags = this.postsData[i].tags;
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
                searchAdjustedPreviewsToLoadCount--;
                if (this.previewsLoadedCount >= searchAdjustedPreviewsToLoadCount) {
                    this.handleAfterPreviewLoad();
                }
                continue;
            }
            this.matches.unshift(this.postsData[i].filename + ".html");
        }
    };
    PostArea.prototype.requestContent = function (startIndex) {
        var _this = this;
        var _loop_2 = function (i) {
            if (this_2.loadCompletedThroughExistingMemory) {
                return { value: void 0 };
            }
            if (!this_2.matches[i]) {
                this_2.previewsToLoadCount = i - startIndex;
                if (this_2.outstandingLoads === 0 && this_2.previewsLoadedCount >= this_2.previewsToLoadCount) {
                    this_2.handleAfterPreviewLoad();
                }
                return { value: void 0 };
            }
            var previewFoundInMemory = void 0;
            for (var _i = 0, _a = this_2.previewsInMemory; _i < _a.length; _i++) {
                var previewInMemory = _a[_i];
                if (previewInMemory.filename === this_2.matches[i]) {
                    previewFoundInMemory = previewInMemory;
                    break;
                }
            }
            if (previewFoundInMemory) {
                this_2.loadPreviews(previewFoundInMemory.html, i, i - startIndex);
            }
            else {
                this_2.outstandingLoads++;
                this_2.httpRequest(PostArea.PREVIEWS_DIRECTORY + this_2.matches[i], function (response) {
                    _this.loadPreviews(response, i, i - startIndex, _this.matches[i]);
                    _this.outstandingLoads--;
                });
            }
        };
        var this_2 = this;
        for (var i = startIndex; i < startIndex + PostArea.POST_LOAD_COUNT; i++) {
            var state_1 = _loop_2(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
    };
    PostArea.prototype.loadPreviews = function (html, rawIndex, index, filename) {
        if (filename) {
            this.previewsInMemory.unshift({ filename: filename, html: html });
        }
        var postWrapper = document.createElement("div");
        postWrapper.classList.add("postWrapper");
        var indexElement = document.createElement("span");
        indexElement.classList.add("hidden");
        indexElement.innerText = rawIndex.toString();
        postWrapper.appendChild(indexElement);
        postWrapper.innerHTML += html;
        // Betting page does not have a proper footer as the posts are pre-expanded
        var footer = document.createElement("div");
        if (!this.isBettingPage) {
            footer.classList.add("postFooter");
            footer.innerText = "Read More";
        }
        else {
            footer.classList.add("postFullPageFooter");
        }
        postWrapper.appendChild(footer);
        this.loadedPreviews.unshift({ element: postWrapper, i: index });
        this.previewsLoadedCount++;
        if (this.previewsLoadedCount >= this.previewsToLoadCount) {
            this.handleAfterPreviewLoad();
            this.loadCompletedThroughExistingMemory = true;
        }
    };
    PostArea.prototype.handleAfterPreviewLoad = function () {
        var _this = this;
        this.postsLoadingIcon.remove();
        for (var _i = 0, _a = this.loadedPreviews; _i < _a.length; _i++) {
            var loadedPreview = _a[_i];
            this.postContainers[loadedPreview.i].appendChild(loadedPreview.element);
        }
        // Betting page is pre-expanded
        if (!this.isBettingPage) {
            var footers = document.getElementsByClassName("postFooter");
            var _loop_3 = function (i) {
                var footerElement = footers[i];
                footerElement.addEventListener("click", function () { return _this.togglePostExpansion(footerElement); });
            };
            for (var i = 0; i < footers.length; i++) {
                _loop_3(i);
            }
        }
        var links = document.getElementsByClassName("postHeaderLink");
        for (var i = 0; i < links.length; i++) {
            var linkElement = links[i];
            linkElement.addEventListener("click", function (e) { return _this.handleLinkClick(e.target); });
        }
        var rawPreviewCount = (window.location.search && window.location.search !== "") ? this.matches.length : this.rawPreviewsToLoadCount;
        var pagesRequiredCount = Math.ceil(rawPreviewCount / PostArea.POST_LOAD_COUNT);
        for (var i = 0; i < pagesRequiredCount; i++) {
            var pageIcon = document.createElement("span");
            pageIcon.classList.add("pageIcon");
            pageIcon.innerText = (i + 1).toString();
            this.pageIconContainer.appendChild(pageIcon);
            if (i === this.activePageIndex) {
                pageIcon.classList.add("pageIcon-active");
            }
            pageIcon.addEventListener("click", function (e) {
                var clickedNumber = e.target.innerText;
                _this.activePageIndex = +clickedNumber - 1;
                _this.load(true, _this.activePageIndex * PostArea.POST_LOAD_COUNT);
            });
        }
    };
    PostArea.prototype.handleLinkClick = function (linkElement) {
        var hiddenInputElement = linkElement.parentElement.parentElement.parentElement.lastElementChild;
        if (Browser.IS_IOS) {
            prompt("Copy the link below:", hiddenInputElement.value);
        }
        else {
            hiddenInputElement.classList.remove("hiddenInput");
            hiddenInputElement.select();
            document.execCommand("copy");
            hiddenInputElement.classList.add("hiddenInput");
            linkElement.classList.add("hidden");
            var tick_1 = linkElement.nextElementSibling;
            tick_1.classList.remove("hidden");
            setTimeout(function () {
                linkElement.classList.remove("hidden");
                tick_1.classList.add("hidden");
            }, 1000);
        }
    };
    PostArea.prototype.togglePostExpansion = function (footerElement) {
        var _this = this;
        var parentElement = footerElement.parentElement;
        var postIndex = +parentElement.firstElementChild.innerText;
        var postContent = parentElement.getElementsByClassName("content")[0];
        if (footerElement.innerText === "Read More") {
            footerElement.innerText = "Read Less";
            if (postContent.innerHTML === "") {
                this.httpRequest(PostArea.POSTS_DIRECTORY + this.matches[postIndex], function (response) { return _this.loadPostContent(response, postContent); });
            }
            else {
                postContent.classList.remove("hidden");
            }
        }
        else {
            footerElement.innerText = "Read More";
            postContent.classList.add("hidden");
        }
    };
    PostArea.prototype.loadPostContent = function (html, postBody) {
        postBody.innerHTML += html;
    };
    PostArea.prototype.loadDirectPost = function (html, filename) {
        var _this = this;
        var postWrapper = document.createElement("div");
        postWrapper.classList.add("postWrapper");
        postWrapper.innerHTML += html;
        var footer = document.createElement("div");
        footer.classList.add("postFullPageFooter");
        postWrapper.appendChild(footer);
        this.postContainers[0].appendChild(postWrapper);
        var directory = this.isBettingPage ? PostArea.PREVIEWS_DIRECTORY : PostArea.POSTS_DIRECTORY;
        this.httpRequest(directory + filename + ".html", function (response) { return _this.loadPostContent(response, postWrapper.getElementsByClassName("content")[0]); });
        var linkElement = postWrapper.getElementsByClassName("postHeaderLink")[0];
        linkElement.addEventListener("click", function (e) { return _this.handleLinkClick(e.target); });
    };
    PostArea.prototype.httpRequest = function (url, callback) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                callback(xmlHttp.responseText);
            }
        };
        xmlHttp.open("GET", url, true);
        xmlHttp.send(null);
    };
    PostArea.LOCAL_SERVER = location.hostname === "localhost" || location.hostname === "127.0.0.1";
    PostArea.PREVIEWS_DIRECTORY = PostArea.LOCAL_SERVER ? "/josh-website/assets/previews/" : "/assets/previews/";
    PostArea.POSTS_DIRECTORY = PostArea.LOCAL_SERVER ? "/josh-website/assets/posts/" : "/assets/posts/";
    PostArea.ACTIVE_TAB_CLASS = "tab-active";
    PostArea.FIXED_TOP_BAR_CLASS = "topBarWrapper-fixed";
    PostArea.POST_LOAD_COUNT = 5;
    return PostArea;
}());
var NavBar = /** @class */ (function () {
    function NavBar() {
        var _this = this;
        this.tabs = document.getElementsByClassName("tab");
        this.allTab = this.tabs[0];
        this.writeupsTab = this.tabs[1];
        this.playersTab = this.tabs[2];
        this.bettingTab = this.tabs[3];
        this.horizontalSeperator = document.getElementsByClassName("horizontalSeperator")[0];
        this.postArea = new PostArea();
        for (var i = 0; i < this.tabs.length; i++) {
            this.tabs[i].addEventListener("click", function (e) {
                var targetElement = e.target;
                if (!targetElement.classList.contains("tab")) {
                    targetElement = targetElement.parentElement;
                }
                window.location.hash = "#c";
                _this.setActiveTab(targetElement);
                var wasDirectLink = window.location.search.indexOf("d=") === 1;
                window.location.search = "";
            });
        }
        this.setActiveTab(this.allTab);
    }
    NavBar.prototype.setActiveTab = function (clickedTab) {
        if (clickedTab === this.activeTab) {
            return;
        }
        if (this.activeTab) {
            this.activeTab.classList.remove("tab-active");
        }
        clickedTab.classList.add("tab-active");
        this.activeTab = clickedTab;
        var isBettingPage = false;
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
            isBettingPage = true;
        }
        this.postArea.setPostsData(postsData, isBettingPage);
        this.postArea.load();
    };
    return NavBar;
}());
var SearchBar = /** @class */ (function () {
    function SearchBar() {
        var _this = this;
        this.searchField = document.getElementsByClassName("searchField")[0];
        var rawSearch = window.location.search;
        var fixedSearch = rawSearch.replace("?s=", "").split("%20").join(" ");
        var isDirectLink = fixedSearch.indexOf("d=") === 1;
        if (!isDirectLink) {
            this.searchField.value = fixedSearch;
        }
        this.searchField.addEventListener("keypress", function (e) {
            var keyCode = e.which || e.keyCode;
            if (keyCode !== 13) {
                return;
            }
            window.location.hash = "#c";
            window.location.search = "s=" + _this.searchField.value;
        });
        // Prevent autoscroll on input focus on iOS
        this.searchField.onfocus = function (e) {
            e.preventDefault();
        };
    }
    return SearchBar;
}());
var TopBar = /** @class */ (function () {
    function TopBar() {
        var _this = this;
        this.nav = document.getElementsByClassName("nav")[0];
        this.topBarWrapper = document.getElementsByClassName("topBarWrapper")[0];
        this.rightSideWrapper = document.getElementsByClassName("rightSideWrapper")[0];
        this.pageTitle = document.getElementsByClassName("pageTitle")[0];
        this.logo = document.getElementsByClassName("logo")[0];
        this.searchWrapper = document.getElementsByClassName("searchWrapper")[0];
        this.search = document.getElementsByClassName("search")[0];
        this.twitterIconWrapper = document.getElementsByClassName("twitterIconWrapper")[0];
        this.twitterIcon = document.getElementsByClassName("twitterIcon")[0];
        this.fixedBarAnchor = document.getElementsByClassName("horizontalSeperator")[0];
        this.topBar = document.getElementsByClassName("topBar")[0];
        this.landing = document.getElementsByClassName("landing")[0];
        this.scroll = document.getElementsByClassName("scroll")[0];
        this.opacityOverlay = document.getElementsByClassName("opacityOverlay")[0];
        this.preFixedTop = 0;
        this.currentOpacity = 0;
        this.initial = function () { return _this.handleInitialFixState(); };
        this.fix = function () { return _this.handleFix(); };
        this.unfix = function () { return _this.handleUnfix(); };
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
    TopBar.prototype.handleInitialFixState = function () {
        var navTop = this.nav.offsetTop;
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
        }
        else if (this.preFixedTop > window.pageYOffset) {
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
    };
    TopBar.prototype.handleFix = function () {
        var navTop = this.nav.offsetTop;
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
    };
    TopBar.prototype.handleUnfix = function () {
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
    };
    TopBar.prototype.updateOpacity = function () {
        var newOpacity = window.pageYOffset / window.innerHeight;
        if (newOpacity > 0 && Math.abs(this.currentOpacity - newOpacity) < TopBar.OPACITY_THRESHOLD) {
            return; // avoid painting as much as possible as it causes scroll lag
        }
        this.currentOpacity = newOpacity;
        this.opacityOverlay.style.opacity = newOpacity.toString();
    };
    TopBar.OPACITY_THRESHOLD = 0.05;
    return TopBar;
}());
var ExternalScriptLoader = /** @class */ (function () {
    function ExternalScriptLoader() {
        var _this = this;
        this.isSmallMobileAdLoaded = false;
        this.isLargeMobileAdLoaded = false;
        this.isTabletAdLoaded = false;
        this.isDesktopAdLoaded = false;
        this.isTwitterLoaded = false;
        window.onresize = function () { return _this.resizeHandler(); };
        this.resizeHandler();
    }
    ExternalScriptLoader.prototype.resizeHandler = function () {
        var width = window.innerWidth;
        if (!this.isDesktopAdLoaded && width >= ExternalScriptLoader.DESKTOP_THRESHOLD) {
            this.isDesktopAdLoaded = true;
            if (!this.isTwitterLoaded) {
                this.isTwitterLoaded = true;
                var twitterScript = document.createElement("script");
                twitterScript.type = "text/javascript";
                twitterScript.charset = "UTF-8";
                twitterScript.src = "http://platform.twitter.com/widgets.js";
                document.getElementsByClassName("twitter")[0].appendChild(twitterScript);
            }
            if (!this.desktopAds) {
                this.desktopAds = document.getElementsByClassName("ad");
            }
            this.desktopAds[0].innerHTML = '<iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=2&p=14&l=ur1&category=consumerelectronics&f=ifr&linkID=8a86d8ad24f8c855ae0eb53b9d865a99&t=ntactactic-21&tracking_id=ntactactic-21" width="160" height="600" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>';
            var adScript = document.createElement("script");
            adScript.type = "text/javascript";
            adScript.charset = "UTF-8";
            adScript.src = "amazon-ad-desktop-min.js";
            this.desktopAds[1].appendChild(adScript);
        }
        else if (!this.isTabletAdLoaded && width >= ExternalScriptLoader.TABLET_THRESHOLD) {
            this.isTabletAdLoaded = true;
            if (!this.tabletAds) {
                this.tabletAds = document.getElementsByClassName("tabletAd");
            }
            this.tabletAds[0].innerHTML = '<iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=2&p=12&l=ur1&category=consumerelectronics&f=ifr&linkID=2a49579c6cc8cf859d96f8ab8101c6f6&t=ntactactic-21&tracking_id=ntactactic-21" width="300" height="250" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>';
            var adScript = document.createElement("script");
            adScript.type = "text/javascript";
            adScript.charset = "UTF-8";
            adScript.src = "amazon-ad-tablet-min.js";
            this.tabletAds[1].appendChild(adScript);
        }
        else if (!this.isLargeMobileAdLoaded && width >= ExternalScriptLoader.LARGE_MOBILE_THRESHOLD) {
            this.isLargeMobileAdLoaded = true;
            this.isSmallMobileAdLoaded = false;
            if (!this.mobileAds) {
                this.mobileAds = document.getElementsByClassName("mobileAd");
            }
            this.mobileAds[0].innerHTML = '<iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=2&p=48&l=ur1&category=consumerelectronics&f=ifr&linkID=b7ad77a9a93f8c8d94c271dd00c4b9fd&t=ntactactic-21&tracking_id=ntactactic-21" width="728" height="90" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>';
            this.mobileAds[1].classList.remove("mobileAdBox");
            this.mobileAds[1].innerHTML = "";
            var adScript = document.createElement("script");
            adScript.type = "text/javascript";
            adScript.charset = "UTF-8";
            adScript.src = "amazon-ad-mobile-large-min.js";
            this.mobileAds[1].appendChild(adScript);
        }
        else if (!this.isSmallMobileAdLoaded && width < ExternalScriptLoader.LARGE_MOBILE_THRESHOLD) {
            this.isSmallMobileAdLoaded = true;
            this.isLargeMobileAdLoaded = false;
            if (!this.mobileAds) {
                this.mobileAds = document.getElementsByClassName("mobileAd");
            }
            this.mobileAds[0].innerHTML = '<iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=2&p=288&l=ez&f=ifr&linkID=f4dd898be9501c0a9c8ddc81f5a53654&t=ntactactic-21&tracking_id=ntactactic-21" width="320" height="50" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>';
            this.mobileAds[1].classList.add("mobileAdBox");
            this.mobileAds[1].innerHTML = '<iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=2&p=42&l=ur1&category=oulet&banner=120ZABQ18ERX25XSHJR2&f=ifr&linkID=1077a125a75bbd7146d1589792806b0d&t=ntactactic-21&tracking_id=ntactactic-21" width="234" height="60" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>';
        }
    };
    ExternalScriptLoader.DESKTOP_THRESHOLD = 1200;
    ExternalScriptLoader.TABLET_THRESHOLD = 1000;
    ExternalScriptLoader.LARGE_MOBILE_THRESHOLD = 728;
    return ExternalScriptLoader;
}());
var Website = /** @class */ (function () {
    function Website() {
        new NavBar();
        new SearchBar();
        new TopBar();
        new ExternalScriptLoader();
    }
    return Website;
}());
new Website();
