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

var createNoteList2Mock = function() {
  var noteListMock = new NoteListMock();
  noteListMock.addNoteMock("Testing is fun");
  noteListMock.addNoteMock("Testing is very fun");
  return noteListMock;
};

var createNoteListWithLongNoteMock = function() {
  var noteListMock = new NoteListMock();
  noteListMock.addNoteMock("Testing is fun. What I mean is, do you get enjoyment out of solving a tricky problem? Getting good results out of working with your team?");
  return noteListMock;
};

var createNoteController = function() {
  var noteListMock = new NoteListMock();
  var noteController = new NoteController(noteListMock, NoteListViewMock);
  return noteController;
};

var createNoteControllerWithNote = function() {
  var noteListMock = new NoteListMock();
  noteListMock.addNoteMock('Hi')
  var noteController = new NoteController(noteListMock, NoteListViewMock);
  return noteController;
};
