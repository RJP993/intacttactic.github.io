class LoadingIcon {
	private parentElement: HTMLElement;
	private wrapper: HTMLElement;

	constructor(parentElement: HTMLElement) {
		this.parentElement = parentElement;

		const wrapper = this.wrapper = document.createElement("div");
		wrapper.classList.add("spinnerWrapper");

		const spinnerPart1 = document.createElement("div");
		spinnerPart1.classList.add("spinnerPart1");
		wrapper.appendChild(spinnerPart1);
		
		const spinnerPart2 = document.createElement("div");
		spinnerPart2.classList.add("spinnerPart2");
		wrapper.appendChild(spinnerPart2);
		
		const spinnerPart3 = document.createElement("div");
		spinnerPart3.classList.add("spinnerPart3");
		wrapper.appendChild(spinnerPart3);
	}

	public append(): void {
		this.parentElement.appendChild(this.wrapper);
	}

	public remove(): void {
		if (!this.parentElement.contains(this.wrapper)) {
			return;
		}
		
		this.parentElement.removeChild(this.wrapper);
	}
}
