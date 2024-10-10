class CustomForm extends HTMLElement {
	constructor() {
		super();

		this._title = document.createElement("input");
		this._hintTitle = document.createElement("p");
		this._labelTitle = document.createElement("label");
		this._formGroupTitle = document.createElement("div");

		this._body = document.createElement("textarea");
		this._hintBody = document.createElement("p");
		this._labelBody = document.createElement("label");
		this._formGroupBody = document.createElement("div");

		this._submit = document.createElement("button");
		this._submit.textContent = "Tambah catatan";

		this._reset = document.createElement("button");
		this._resetIcon = document.createElement("img");

		this._form = document.createElement("form");

		this._popupButton = document.getElementById("button_add_note");
		this._backgroundPopup = document.getElementById("blur_background");
	}

	connectedCallback() {
		this._resetIcon.setAttribute("src", "../../assets/cancel_icon.svg");

		this._reset.setAttribute("type", "reset");
		this._reset.setAttribute("formnovalidate", "");

		this._reset.classList.add("exit_action");
		this._reset.append(this._resetIcon);

		this._title.setAttribute("id", "title");
		this._title.setAttribute("type", "text");
		this._title.setAttribute("name", "title");
		this._title.setAttribute("minlength", 3);
		this._title.setAttribute("maxlength", 16);
		this._title.setAttribute("autocomplete", "title");
		this._title.setAttribute("required", "");
		this._title.setAttribute("placeholder", "Judul catatan");

		this._hintTitle.setAttribute("open", "");

		this._labelTitle.setAttribute("for", "title");
		this._labelTitle.textContent = "Title";

		this._formGroupTitle.classList.add("form_group");
		this._formGroupTitle.append(
			this._labelTitle,
			this._title,
			this._hintTitle
		);

		this._body.setAttribute("id", "body");
		this._body.setAttribute("name", "body");
		this._body.setAttribute("placeholder", "Deskripsi catatan");
		this._body.setAttribute("required", "");

		this._hintBody.setAttribute("open", "");

		this._labelBody.setAttribute("for", "body");

		this._formGroupBody.classList.add("form_group");
		this._formGroupBody.append(this._labelBody, this._body, this._hintBody);

		this._form.classList.add("add_note");

		this._form.append(
			this._reset,
			this._formGroupTitle,
			this._formGroupBody,
			this._submit
		);

		this._form.addEventListener("reset", () => this.toogleOpenClose());

		this.append(this._form);
		this.classList.add("container_form_popup");
		this.classList.add("close");

		this.actionPopup();
	}

	actionPopup() {
		this._popupButton.addEventListener("click", () => this.toogleOpenClose());
	}

	toogleOpenClose() {
		this._backgroundPopup.classList.toggle("open");
		this._backgroundPopup.classList.toggle("close");
		this.classList.toggle("open");
		this.classList.toggle("close");
	}
}

window.customElements.define("form-component", CustomForm);
