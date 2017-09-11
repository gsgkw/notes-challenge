var Note = require("./note-model.js")

function NoteList() {
	this.notes = [];
}

NoteList.prototype.addNote = function (value) {
	  var note = new Note(value);
	  this.notes.push(note);
	}

NoteList.prototype.print = function() {
	return this.notes;
}

module.exports = NoteList