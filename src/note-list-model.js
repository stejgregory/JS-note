(function(exports) {
  function NoteList() {
    this.notes = []
  }

  NoteList.prototype.addNote = function(text) {
    var note = new Note(text);
    this.notes.push(note);
  };

  NoteList.prototype.returnNotes = function() {
    return this.notes;
  };

  exports.NoteList = NoteList;
  exports.addNote = this.addNote;
  exports.returnNotes = this.returnNotes;
})(this);
