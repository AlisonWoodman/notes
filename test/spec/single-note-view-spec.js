header.displayHeader("Single note view tests");

(function() {
  var description = "Single notes are displayed in HTML";
  noteMock = new NoteMock('Javascript is great');
  singleNoteView = new SingleNoteView(noteMock);
  assert.isTrue(singleNoteView.display() === "<div>Javascript is great</div>", description);
})();
