(function(exports){
  function NoteController(NoteList) {
    this.noteListView = new NoteListView(NoteList);
    this.noteList = NoteList
    console.log(this.noteList)
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

  exports.NoteController = NoteController;
})(this);
