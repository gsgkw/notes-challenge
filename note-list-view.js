var Note = require('./note-model.js');
var NoteList = require('./note-list-model.js');


function NoteListView(noteList) {
      for (i = 0; i < noteList.notes.length; i++){
   noteList.notes[i].read()
  }
};


// function NoteListView(listObject) {
//   return (
//     "<ul>" + function(listObject) {
//       for (i = 0; i < listObject.notes.length; i++){
//       "<li>"+ listObject.notes[i].read() + "</li>"}} + "</ul>"
//     )
//   };

module.exports = NoteListView
