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
  console.log(1)
  window.addEventListener("hashchange", showNoteContentForCurrentPage());
};

function showNoteContentForCurrentPage() {
  console.log(2)
  showNoteContent(getNoteIdFromUrl(location));
};

function getNoteIdFromUrl (location) {
  console.log(3)
  return location.hash.split("/")[1];
};

function showNoteContent(noteId) {
  console.log(4)
  console.log('NoteId' + noteId)
  console.log('NoteList' + NoteList)
  console.log('NoteList.getNotefromid...' + noteList.getNoteFromId(noteId))

  note = noteList.getNoteFromId(noteId);
  singleNoteView = new SingleNoteView(note);
  singleNoteView.display();
}
