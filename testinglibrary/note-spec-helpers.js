(function(exports){
  exports.note = new Note('Javascript is great');
})(this);

var createNoteList = function() {
  var noteList = new  NoteList();
  noteList.addNote("Testing is fun");
  return noteList;
};

var createNoteList2 = function() {
  var noteList = new NoteList();
  noteList.addNote("Testing is fun");
  noteList.addNote("Testing is very fun");
  return noteList;
};
