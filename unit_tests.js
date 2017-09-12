var Note = require('./note-model.js');
var NoteList = require('./note-list-model.js');
var NoteListView = require('./note-list-view.js');

(function(){
  var note = new Note('this is a test');
    if (note.text !== 'this is a test') {
      throw new Error('does not instantiate with text')
    };
    if (note.read() !== 'this is a test') {
      throw new Error('does not return stored text')
    };

})();

(function(){
  var noteList = new NoteList;
    noteList.addNote('First note');
  if (noteList.notes[0].read() !== 'First note')
  	throw new Error('Does not read note from array')
})();


(function(){
  var noteList = new NoteList;
    noteList.addNote('First note');
    var noteListView = new NoteListView(noteList)
  if (noteListView.getlist() !== '<ul><li>First note</li></ul>')
  	throw new Error('Does not print notes into HTML')
})();
