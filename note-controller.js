

function NoteController(listmodel){
  listmodel.addNote('Favourite drink: seltzer');
  noteListView = new NoteListView(listmodel);
};

NoteController.prototype.displayNotes = function(){
  var myElement = document.getElementById("app");

  myElement.innerHTML = noteListView.getlist()
};
