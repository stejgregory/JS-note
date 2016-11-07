'use strict';

(function(exports) {

  function List(){
   this.notes = []
  }

  List.prototype.addNote = function (note) {
    this.notes.push(note);
  };

  List.prototype.showAllNotes = function () {
   var arrayLength = this.notes.length
   for (var i = 0; i < arrayLength; i++) {
     return(this.notes[i])
   }
  };


  exports.List = List;

  })(this);
