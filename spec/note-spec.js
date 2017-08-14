(function() {
  var description = "Note text matches input";
  note = new Note('Javascript is great');
  assert.isTrue(note.text() === 'Javascript is great', description);
})();

(function() {
  var description = "Note list stores array of notes";
  noteList = new  NoteList();
  noteList.addNote("Testing is fun")
  assert.isTrue(noteList.getNotes().length === 1, description);
  assert.isTrue(noteList.getNotes()[0].text() === "Testing is fun", description);
})();
