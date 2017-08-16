header.displayHeader("Note list view tests");

(function() {
  var description = "Note list #display method shows notes in html";
  noteListView = new NoteListView(createNoteList2());
  assert.isTrue(noteListView.display() === "<ul><li>Testing is fun</li><li>Testing is very fun</li></ul>", description);
})();

(function() {
  var description = "Note list #display method truncates note contents to 20 characters";
  noteListView = new NoteListView(createNoteListWithLongNote());
  assert.isTrue(noteListView.display() === "<ul><li>Testing is fun. What ...</li></ul>", description);
})();
