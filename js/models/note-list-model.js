(function(exports) {
  function NoteList(){
    this._notes = [];
    this._id = 0
  }

  NoteList.prototype.addNote = function(text) {
    noteId = this._createNewNoteId();
    this._notes.push(new Note(text, noteId));
  };

  NoteList.prototype._createNewNoteId = function() {
    if (this._notes.length > 0) {
      this._id ++
    }
    return this._id;
  };

  NoteList.prototype.getNotes = function(){
    return this._notes;
  };

  NoteList.prototype.getNoteFromId = function(id) {
    return this._notes[id];
  };

  exports.NoteList = NoteList;
})(this);
