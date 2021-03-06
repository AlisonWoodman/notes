(function(exports) {
  function NoteListView(noteList) {
    this._noteList = noteList;
  };

  NoteListView.prototype.display = function() {
    var htmlToReturn = "<ul>";
    this._noteList._notes.forEach(function(note){
      noteId = note.getNoteId();
      noteTextShort = note.text().length >= 20 ? note.text().substr(0,20) + " ..." : note.text();
      htmlToReturn += ("<li><a href=\"#notes/" + noteId + "\">" + noteTextShort + "</a></li>");
    });
    htmlToReturn += "</ul>";
    return htmlToReturn;
  };
    exports.NoteListView = NoteListView;
})(this);
