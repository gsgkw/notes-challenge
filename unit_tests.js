var Note = require('./note-model.js');


(function(){
  var note = new Note('this is a test');
  if (note.text !== 'this is a test') {
    throw new Error('does not instantiate with text')
  };
  if (note.read() !== 'this is a test') {
    throw new Error('does not return stored text')
  };

})();
