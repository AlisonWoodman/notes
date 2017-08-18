(function(exports){
  function NoteMock(str) {
    this._text = str;
  };

  NoteMock.prototype.text = function(){
    return this._text
  }
  exports.NoteMock = NoteMock;
})(this);

(function(exports) {
  function NoteListViewMock(noteList) {
    this._noteList = noteList;
  };

  NoteListViewMock.prototype.display = function() {
    var htmlToReturn = "<ul>";
    this._noteList._notes.forEach(function(note){
      noteId = note.getNoteId();
      noteTextShort = note.text().length >= 20 ? note.text().substr(0,20) + " ..." : note.text();
      htmlToReturn += ("<li><a href=\"#notes/" + noteId + "\">" + noteTextShort + "</a></li>");
    });
    htmlToReturn += "</ul>";
    return htmlToReturn;
  };
    exports.NoteListViewMock = NoteListViewMock;
})(this);

(function(exports) {
  function NoteListMock(){
    this._notes = [];
    this._id = 0
  }

  NoteListMock.prototype.addNoteMock = function(text) {
    noteId = this._createNewNoteId();
    this._notes.push(new Note(text, noteId));
  };

  NoteListMock.prototype._createNewNoteId = function() {
    if (this._notes.length > 0) {
      this._id ++
    }
    return this._id;
  };

  NoteListMock.prototype.getNoteFromId = function(id) {
    return this._notes[id];
  };

  exports.NoteListMock = NoteListMock;
})(this);
