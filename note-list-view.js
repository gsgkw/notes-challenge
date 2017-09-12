var Note = require('./note-model.js');
var NoteList = require('./note-list-model.js');


// function NoteListView(noteList) {
//       for (i = 0; i < noteList.notes.length; i++){
//    noteList.notes[i].read()
//   }
// };


function NoteListView(listObject) {
  var listObject = listObject;
  this.getlist = function() {
  string = "";
  for (i = 0; i < listObject.notes.length; i++){ string +=
      "<li>"+ listObject.notes[i].read() + "</li>"};
      return ("<ul>" + string + "</ul>")}

  };

module.exports = NoteListView
