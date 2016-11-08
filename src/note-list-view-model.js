(function(exports) {

    function NoteListView(noteList) {
        this.noteListStore = noteList;
    }

    NoteListView.prototype.returnHTML = function () {
      var notesList = this.noteListStore;
      var notes = notesList.showNotes;
      var list = notes.map(function(note) {
          return "<li><div>" + note.getText + "</li></div>";
      }).join("");
      return list;
    };

    exports.NoteListView = NoteListView;
    exports.returnHTML = this.returnHTML;

})(this);
