header.displayHeader("Note list view tests");

(function() {
  var description = "Note list #display method shows notes in html";
  noteListView = new NoteListView(createNoteList2Mock());
  assert.isTrue(noteListView.display() === "<ul><li><a href=\"#notes/0\">Testing is fun</a></li><li><a href=\"#notes/1\">Testing is very fun</a></li></ul>", description);
})();

(function() {
  var description = "Note list #display method truncates note contents to 20 characters";
  noteListView = new NoteListView(createNoteListWithLongNoteMock());
  assert.isTrue(noteListView.display() === "<ul><li><a href=\"#notes/0\">Testing is fun. What ...</a></li></ul>", description);
})();
