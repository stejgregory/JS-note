(function(exports) {

    function NoteListView(noteList) {
        this.noteList = noteList;
    }

    NoteListView.prototype.displayNotes = function () {
      var notes = this.noteList.showNotes();
      var list = notes.map(function(note) {
          return "<li><div>" + note.getText() + "</div></li>";
      }).join("");
      return '<ul>' + list + '</ul>';
    };

    exports.NoteListView = NoteListView;
    exports.displayNotes = this.displayNotes;

})(this);
