(function(exports){
  function NoteController(NoteList) {
    this.noteListView = new NoteListView(NoteList);
  }
  NoteController.prototype.displayNoteList = function () {
    exports.document.getElementById("app").innerHTML = this.noteListView.display();
  };
  exports.NoteController = NoteController;
})(this);

//new NoteController(NoteList).displayNoteList();
