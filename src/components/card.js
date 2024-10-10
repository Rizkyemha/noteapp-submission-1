class Card extends HTMLElement {
	constructor() {
		super();

		this._id = "";
		this._title = "";
		this._body = "";
		this._createdAt = "";
		this._archived = "";
	}

	connectedCallback() {
		this.classList.add("card");
		this.setAttribute("id", this._id);
		this.render();
	}

	set note(note) {
		this._id = note.id;
		this._title = note.title;
		this._body = note.body;
		this._createdAt = note.createdAt;
		this._archived = note.archived;
	}

	render() {
		this.innerHTML = `
        <p>${this._archived ? "archived" : "unarchived"}</p>
        <p>|</p>
        <p>${new Date(this._createdAt).toLocaleString("id-ID")}</p>
      <p class="note_title">${this._title}</p>
      <p class="note_body">${this._body}</p>
    `;
	}
}

window.customElements.define("card-note", Card);
