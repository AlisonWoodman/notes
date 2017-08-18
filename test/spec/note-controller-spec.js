header.displayHeader("Controller tests");

(function(){
  var description = "Can instantiate a new note controller";
  var noteController = createNoteController();
  assert.isTrue((noteController instanceof NoteController), description);
})();


(function(){
  var description = "Note controller #displayNoteList sets innerHTML to correct HTML";
  var NoteController = createNoteController();
  NoteController.displayNoteList();
  assert.isTrue(document.getElementById("app").innerHTML === "<ul><li><a href=\"#notes/0\">Hi</a></li></ul>", description);
})();

(function() {
  var description = "Show note content method loads the content for a single note page";
  var NoteController = createNoteController();
  NoteController.showNoteContent(0);
  assert.isTrue(document.getElementById("app").innerHTML === "<div>Hi</div>", description);
})();
