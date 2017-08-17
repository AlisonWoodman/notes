(function(exports){
  function NoteController(NoteList) {
    this.noteListView = new NoteListView(NoteList);
  }
  NoteController.prototype.displayNoteList = function () {
    exports.document.getElementById("app").innerHTML = this.noteListView.display();
  };
  exports.NoteController = NoteController;
})(this);

function makeUrlChangeToDisplayNoteContent() {
  window.addEventListener("hashchange", showNoteContentForCurrentPage);
};

function showNoteContentForCurrentPage() {
  showNoteContent(getNoteIdFromUrl());
};

function getNoteIdFromUrl (location) {
  return location.hash.split("/")[1];
};

function showNoteContent(noteId) {
  note = NoteList.getNoteFromId(noteId);
  var singleNoteView = new SingleNoteView(note);
  singleNoteView.display();
}
