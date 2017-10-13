class SearchBar {
	private searchField: HTMLInputElement = document.getElementsByClassName("searchField")[0] as HTMLInputElement;

	constructor() {
		const rawSearch = window.location.search;
		const fixedSearch = rawSearch.replace("?s=", "").split("%20").join(" ");
		this.searchField.value = fixedSearch;

		this.searchField.addEventListener("keypress", (e: KeyboardEvent) => {
			const keyCode = e.which || e.keyCode;
			if (keyCode !== 13) {
				return;
			}
		
			window.location.hash = "#c";
			window.location.search = "s=" + this.searchField.value;
		});

		// Prevent autoscroll on input focus on iOS
		this.searchField.onfocus = (e: Event) => {
        		e.preventDefault();
    		}
	}
}
