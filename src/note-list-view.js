(function(exports) {

  function NoteListView(noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype.displayNotes = function () {
    var notes = this.noteList.showNotes();
    var list = notes.map(function(note) {
      return '<li><a href="#notes/' + note.id + '"><div>' + chopText(note.getText()) + "</div</a></li>";
    }).join("");
    return '<ul>' + list + '</ul>';
  };

  function chopText(text) {
    return (text.length > 20) ? text.substr(0,20) + '...' : text;
  }

  exports.NoteListView = NoteListView;
  exports.displayNotes = this.displayNotes;

})(this);
