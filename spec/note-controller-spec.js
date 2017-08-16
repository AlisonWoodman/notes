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
  console.log(document.getElementById("app").innerHTML);
  assert.isTrue(document.getElementById("app").innerHTML === "<ul><li><a href=\"#notes/0\">Testing is fun</a></li></ul>", description);
})();
