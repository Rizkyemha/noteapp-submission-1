class Notes extends HTMLElement {
	constructor() {
		super();

		this.notes = [];
		this._containerType = true;
	}

	connectedCallback() {
		const cardNote = document.createElement("card-note");
		this.notes
			.filter((note) => this._containerType === note.archived)
			.foreach((note) => {
				cardNote.note = note;
				this.appendChild(cardNote);
			});
	}

	set notes(notes) {
		console.log(notes);
		console.log(archived);
		this.notes.push([...notes]);
	}
}

window.customElements.define("notes-container", Notes);
