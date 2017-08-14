function Note(text){
  this._text = text
};

Note.prototype.text = function(){
  return this._text
}
