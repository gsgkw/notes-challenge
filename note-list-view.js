
(function(exports){
function NoteListView(listObject) {
  var listObject = listObject;
  this.getlist = function() {
  string = "";
  for (i = 0; i < listObject.notes.length; i++){ string +=
      "<li>"+ listObject.notes[i].read() + "</li>"};
      return ("<ul>" + string + "</ul>")}

  };

exports.NoteListView = NoteListView
})(this)
