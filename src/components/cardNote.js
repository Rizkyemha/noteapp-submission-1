class CardNote extends HTMLElement {
	constructor() {
		super();

		const container = document.createElement("div");
		container.classList.add("card");

		this.noteTitle = document.createElement("p");
		this.noteTitle.classList.add("note_title");

		this.noteDesc = document.createElement("p");
		this.noteDesc.classList.add("note_desc");

		container.appendChild(this.noteTitle);
		container.appendChild(this.noteDesc);
	}

	set noteData(note) {
		this.noteTilte.textContent = note.title || "Note Title Default";
		this.noteDesc.textContent = note.desc || "Note Desc Default";
	}
}

customElements.define("card-note", CardNote);

export const card_note = document.createElement("card-note");
