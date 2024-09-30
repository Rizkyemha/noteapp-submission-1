import { card_note } from "./components/cardNote.js";
import { RENDER_EVENT, render } from "./utils/render.js";

document.addEventListener("DOMContentLoaded", () => {
	const note = [];

	const _addNoteButton = document.getElementById("button_add_note");
	const _addNoteForm = document.getElementById("add_note_form_container");
	const _formField = document.getElementById("add_note_form");
	const _blurBackground = document.getElementById("blur_background");

	function toogleClass() {
		_addNoteForm.classList.toggle("open");
		_addNoteForm.classList.toggle("close");
		_blurBackground.classList.toggle("open");
		_blurBackground.classList.toggle("close");
	}

	document.addEventListener(RENDER_EVENT, function () {
		console.log("yahahaha");
	});

	_addNoteButton.addEventListener("click", (e) => {
		e.preventDefault();
		toogleClass();
	});

	_formField.addEventListener("reset", (e) => {
		e.preventDefault();
		toogleClass();
	});

	_formField.addEventListener("submit", (e) => {
		e.preventDefault();
		toogleClass();
	});

	console.log("Listener untuk RENDER_EVENT telah dipasang");
	dispatchEvent(render);
});
