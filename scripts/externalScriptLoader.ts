class ExternalScriptLoader {
	private static readonly DESKTOP_THRESHOLD = 1200;
	private static readonly TABLET_THRESHOLD = 1000;
	private static readonly LARGE_MOBILE_THRESHOLD = 728;

	private isSmallMobileAdLoaded = false;
	private isLargeMobileAdLoaded = false;
	private isTabletAdLoaded = false;
	private isDesktopAdLoaded = false;
	private isTwitterLoaded = false;

	private desktopAds: HTMLCollectionOf<Element>;
	private tabletAds: HTMLCollectionOf<Element>;
	private mobileAds: HTMLCollectionOf<Element>;

	constructor() {
		window.onresize = () => this.resizeHandler();
		this.resizeHandler();
	}

	private resizeHandler(): void {
		const width = window.innerWidth;
		
		if (!this.isDesktopAdLoaded && width >= ExternalScriptLoader.DESKTOP_THRESHOLD) {
			this.isDesktopAdLoaded = true;

			if (!this.isTwitterLoaded) {
				this.isTwitterLoaded = true;
				
				const twitterScript = document.createElement("script");
				twitterScript.type = "text/javascript";
				twitterScript.charset = "UTF-8";
				twitterScript.src = "http://platform.twitter.com/widgets.js";
				document.getElementsByClassName("twitter")[0].appendChild(twitterScript);
			}

			if (!this.desktopAds) {
				this.desktopAds = document.getElementsByClassName("ad");
			}
			
			this.desktopAds[0].innerHTML = '<iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=2&p=14&l=ur1&category=consumerelectronics&f=ifr&linkID=8a86d8ad24f8c855ae0eb53b9d865a99&t=ntactactic-21&tracking_id=ntactactic-21" width="160" height="600" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>';
	
			const adScript = document.createElement("script");
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

			const adScript = document.createElement("script");
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

			const adScript = document.createElement("script");
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
	}
}
