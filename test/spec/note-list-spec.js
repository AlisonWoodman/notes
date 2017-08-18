header.displayHeader("Note list tests");

(function() {
  var description = "Note list stores array of notes";
  var noteList = createNoteList();
  assert.isTrue(noteList.getNotes().length === 1, description);
})();

(function() {
  var description = "stored item in array responds to .text method";
  var noteList = createNoteList();
  assert.isTrue(noteList.getNotes()[0].text() === "Testing is fun", description);
})();

(function() {
  var description = "Note list creates the first note with id = 0";
  var noteList = createNoteList();
  assert.isTrue(noteList.getNotes()[0].getNoteId() === 0, description);
})();

(function() {
  var description = "Note list creates each note with id incremented from previous";
  var noteList = createNoteList2();
  assert.isTrue(noteList.getNotes()[0].getNoteId() === 0, description);
  assert.isTrue(noteList.getNotes()[1].getNoteId() === 1, description);
})();

(function(){
  var description = "Retrieves note by id";
  var noteList = createNoteList();
  assert.isTrue(noteList.getNoteFromId(0).text() === "Testing is fun", description);
})();
