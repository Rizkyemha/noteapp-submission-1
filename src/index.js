import { notes } from "./data/index.js";
import "./components/form.js";
import "./components/notes.js";
import "./components/card.js";
import "./components/empty.js";

document.addEventListener("DOMContentLoaded", () => {
	// event render
	const RENDER_EVENT = "RENDER_EVENT";
	const render = new Event(RENDER_EVENT);

	const notes_unarchived = document.getElementById("notes_unarchived");
	const notes_archived = document.getElementById("notes_archived");
	const _form = document.querySelector(".add_note");

	function addNote() {
		const title = _form.elements.title.value;
		const body = _form.elements.body.value;
		const id = `${new Date().getUTCMilliseconds()}`;
		const date = new Date().getDate();
		const archived = false;

		return {
			id,
			title,
			body,
			date,
			archived,
		};
	}

	_form.addEventListener("submit", (e) => {
		e.preventDefault();
		const newNote = addNote();
		notes.push(newNote);
		document.dispatchEvent(render);
	});

	document.addEventListener(RENDER_EVENT, () => {
		console.log("RENDER BERJALAN AMAN");

		notes_archived.innerHTML = "";
		notes_unarchived.innerHTML = "";

		notes.forEach((note) => {
			const cardNote = document.createElement("card-note");
			cardNote.note = note;

			note.archived
				? notes_archived.appendChild(cardNote)
				: notes_unarchived.appendChild(cardNote);
		});
	});

	document.dispatchEvent(render);
});
