(function(exports){
  exports.note = new Note('Javascript is great');
})(this);

var createNoteList = function() {
  var noteList = new NoteList();
  noteList.addNote("Testing is fun");
  return noteList;
};

var createNoteList2 = function() {
  var noteList = new NoteList();
  noteList.addNote("Testing is fun");
  noteList.addNote("Testing is very fun");
  return noteList;
};

var createNoteListWithLongNote = function() {
  var noteList = new NoteList();
  noteList.addNote("Testing is fun. What I mean is, do you get enjoyment out of solving a tricky problem? Getting good results out of working with your team?");
  return noteList;
};

var createNoteController = function() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList, NoteListView);
  return noteController;
};
