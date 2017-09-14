

function NoteController(listmodel){
  listmodel.addNote('Favourite drink: seltzer');
  noteListView = new NoteListView(listmodel);
};

NoteController.prototype.displayNotes = function(doc = document){
doc.getElementById("app").innerHTML = noteListView.getlist()
};
