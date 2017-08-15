//document.getElementById("app").innerHTML = "Howdy";

(function(exports){
  function NoteController(NoteList) {
    // this.list = new NoteList();
    // this.list.addNote("Favourite drink: seltzer");
    this.noteListView = new NoteListView(NoteList);
  }
  NoteController.prototype.displayNoteList = function () {
    exports.document.getElementById("app").innerHTML = this.noteListView.display();
  };
  exports.NoteController = NoteController;
})(this);

//new NoteController(NoteList).displayNoteList();
