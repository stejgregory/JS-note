function Note(text) {
  this.text = text
}

Note.prototype.returnText = function () {
  return this.text
};


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
