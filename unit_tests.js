var Note = require('./note-model.js');
var NoteList = require('./node-list-model.js');


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
  	throw new Error('You are shit')
})();