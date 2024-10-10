class Emptynote extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.textContent = "ITEM MASIH KOSONG";
		this.render();
	}
}

window.customElements.define("empty-notes", Emptynote);
