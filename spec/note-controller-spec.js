(function(){
  var description = "Instantiate a new note controller";
  var noteController = createNoteController();
  assert.isTrue((noteController instanceof NoteController), description);
})();


(function(){
  var description = "Note controller #displayNoteList sets innerHTML to correct HTML";
  var NoteController = createNoteController();
  NoteController.displayNoteList();
  assert.isTrue(document.getElementById("app").innerHTML === "<ul><li>Testing is fun</li></ul>", description);
})();
