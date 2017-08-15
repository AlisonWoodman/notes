header.displayHeader("Single note view tests");

(function() {
  var description = "Single notes are displayed in HTML";
  singleNoteView = new SingleNoteView(note);
  assert.isTrue(singleNoteView.display() === "<div>Javascript is great</div>", description);
})();
