class SearchBar {
	private searchField: HTMLInputElement = document.getElementsByClassName("searchField")[0] as HTMLInputElement;

	constructor() {
		this.searchField.addEventListener("keypress", (e: KeyboardEvent) => {
			const keyCode = e.which || e.keyCode;
			if (keyCode !== 13) {
				return;
			}
		
			window.location.hash = "#content";
			window.location.search = this.searchField.value;
		});

		// Prevent autoscroll on input focus on iOS
		this.searchField.onfocus = (e: Event) => {
        		e.preventDefault();
    		}
	}
}
