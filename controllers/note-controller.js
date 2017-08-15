//document.getElementById("app").innerHTML = "Howdy";

(function(exports){
  function NoteController(noteListModel) {
    this.list = new noteListModel();
    this.list.addNote("Favourite drink: seltzer");
    this.noteListView = new NoteListView(this.list);
  }
  NoteController.prototype.displayNoteList = function () {
    document.getElementById("app").innerHTML = this.noteListView.display();
  };
  exports.NoteController = NoteController;
})(this);

console.log(new NoteController(NoteList));
document.getElementById("app").innerHTML = new NoteController(NoteList).displayNoteList();
