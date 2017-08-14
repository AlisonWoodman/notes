NoteListView = function(noteList) {
  this._noteList = noteList;
};

NoteListView.prototype.display = function() {
  var notes = [];
  this._noteList._notes.forEach(function(note){
    notes.push(note.text());
  });
  return "<ul><li>" + notes.join("</li><li>") + "</li></ul>";
};
