(function(exports) {
  function NoteListView(noteList) {
    this._noteList = noteList;
  };

  NoteListView.prototype.display = function() {
    var notes = [];
    this._noteList._notes.forEach(function(note){
      noteTextShort = note.text().length >= 20 ? note.text().substr(0,20) + " ..." : note.text();
      notes.push(noteTextShort);
    });
    return "<ul><li>" + notes.join("</li><li>") + "</li></ul>";
  };
    exports.NoteListView = NoteListView;
})(this);
