// var Note = require('./note-model.js').Note;
// var NoteList = require('./note-list-model.js').NoteList;
// var NoteListView = require('./note-list-view.js');

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
  function NoteListDouble() {};
    NoteListDouble.prototype = {
      addNote: function() {}
    };

  var noteListDouble = new NoteListDouble
  var noteController = new NoteController(noteListDouble)

})();

(function(){

  function App() {};
  App.prototype = {
    innerHTML: "hello"
  };

  function Document() {
    var app = new App;
    this.getElementById = function(a){

        return app};
  };

  function NoteList() {}
  NoteList.prototype = {
    notes: [],
    addNote: function() {
      var note = new Note('this is a test note');
		  this.notes.push(note);
    }
  }

  var document = new Document;
  var noteList = new NoteList;
    var noteController = new NoteController(noteList);
    noteController.displayNotes(document);
    if(document.getElementById("app").innerHTML !== '<ul><li>this is a test note</li></ul>')
    throw new Error('does not work')


  // if (noteListView.getlist() !== '<ul><li>First note</li></ul>')
  // 	throw new Error('Does not print notes into HTML')
})();



(function(){
  var noteList = new NoteList;
    noteList.addNote('First note');
    var noteListView = new NoteListView(noteList)
  if (noteListView.getlist() !== '<ul><li>First note</li></ul>')
  	throw new Error('Does not print notes into HTML')
})();
