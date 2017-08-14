(function() {
  var description = "Note text matches input";
  note = new Note('Javascript is great');
  assert.isTrue(note.text() === 'Javascript is great', description);
})();
