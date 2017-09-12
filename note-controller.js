// var Note = require(['./note-model.js'], function(Note)){};
// var NoteList = require('./note-list-model.js');
// var NoteListView = require('./note-list-view.js');


var noteList = new NoteList
noteList.addNote('Favourite drink: seltzer')
noteListView = new NoteListView(noteList)


function displayNotes(){
  var myElement = document.getElementById("app");
  console.log(myElement);
  myElement.innerHTML = noteListView.getlist()
};
