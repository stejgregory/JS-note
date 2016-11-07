'use strict';

 function Note(note){
   this._text = note
 }

   (function (exports) {

    Note.prototype.returnNote = function () {
     return this._text;
    };

   })(this);
