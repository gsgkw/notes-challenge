
(function(exports){

  function Note(text) {
    this.text = text;
    this.read = function() {
      return this.text
    };
  };

  exports.Note = Note;
})(this)
