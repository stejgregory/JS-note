(function(exports) {

    function NoteListView(noteList) {
        this.noteList = noteList;
    }

    NoteListView.prototype.returnHTML = function () {
      var notesList = this.noteList;
      var notes = notesList.showNotes;
      var list = notes.map(function(note) {
          return "<li><div>" + note.getText + "</li></div>";
      }).join("");
      return list;
    };

    exports.NoteListView = NoteListView;
    exports.returnHTML = this.returnHTML;

})(this);
