(function(exports){
  function NoteMock(str) {
    this._text = str;
  };

  NoteMock.prototype.text = function(){
    return this._text
  }
  exports.NoteMock = NoteMock;
})(this);
