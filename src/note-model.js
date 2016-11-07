'use strict';

(function(exports) {

  function Note(note){
    this._text = note
  }

  Note.prototype.returnNote = function () {
   return this._text;
  };

exports.Note = Note;

})(this);
