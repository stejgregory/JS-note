(function(exports) {

  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(noteList);
  }

  NoteController.prototype.insertNotes = function () {
    var notes = this.noteListView.displayNotes();
    document.getElementById("app").innerHTML = notes;
  };

  exports.NoteController = NoteController;
  exports.insertNotes = this.insertNotes;
})(this);
