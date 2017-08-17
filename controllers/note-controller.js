(function(exports){
  function NoteController(NoteList, NoteListView) {
    this.noteList = NoteList;
    this.noteList.addNote("Hi");
    this.noteListView = new NoteListView(this.noteList);
  }
  NoteController.prototype.displayNoteList = function () {
    exports.document.getElementById("app").innerHTML = this.noteListView.display();
  };

  NoteController.prototype.makeUrlChangeToDisplayNoteContent = function () {
    var self = this;
    window.addEventListener("hashchange", function() {
      self.showNoteContentForCurrentPage();
    });
  };

  NoteController.prototype.showNoteContentForCurrentPage = function() {
    this.showNoteContent(this.getNoteIdFromUrl(location));
  };

  NoteController.prototype.getNoteIdFromUrl = function(location) {
    return location.hash.split("/")[1];
  };

  NoteController.prototype.showNoteContent = function(noteId) {
    var selectednote = this.noteList.getNoteFromId(noteId);
    singleNoteView = new SingleNoteView(selectednote);
    exports.document.getElementById("app").innerHTML = singleNoteView.display();
  };

  NoteController.prototype.detectSubmitEvent = function() {
    var self = this;
    document.getElementById('text').addEventListener("submit", function(submitEvent) {
      self.noteList.addNote(this.note.value);
      submitEvent.preventDefault();
    });
  };

  exports.NoteController = NoteController;
})(this);
