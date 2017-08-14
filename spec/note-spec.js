(function() {
  var description = "Note text matches input";
  note = new Note('Javascript is great');
  assert.isTrue(note.text() === 'Javascript is great', description);
})();

(function() {
  var description = "Note list stores array of notes";
  var description2 = "stored item in array responds to .text method";
  noteList = new  NoteList();
  noteList.addNote("Testing is fun");
  assert.isTrue(noteList.getNotes().length === 1, description);
  assert.isTrue(noteList.getNotes()[0].text() === "Testing is fun", description2);
})();

(function() {
  var description = "Note list #display method shows notes in html";
  noteList = new NoteList();
  noteList.addNote("Testing is fun");
  noteList.addNote("Testing is very fun");
  noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.display() === "<ul><li>Testing is fun</li><li>Testing is very fun</li></ul>", description);
})();
