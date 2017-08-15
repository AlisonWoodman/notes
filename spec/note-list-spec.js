(function() {
  var description = "Note list stores array of notes";
  var description2 = "stored item in array responds to .text method";
  var noteList = createNoteList();
  assert.isTrue(noteList.getNotes().length === 1, description);
  assert.isTrue(noteList.getNotes()[0].text() === "Testing is fun", description2);
})();
