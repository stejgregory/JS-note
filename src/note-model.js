(function(exports) {
  function Note(text) {
    this.text = text
  }

  Note.prototype.returnText = function () {
    return this.text
  };

  exports.Note = Note;
  exports.returnText = this.returnText;
})(this);


// (function() {
//   function Note(text) {
//     this.text = text
//   }
//
//   Note.prototype.returnText = function () {
//     return this.text
//   };
//
//   var note = new Note("Hello World");
//   return note.returnText()
// })();
