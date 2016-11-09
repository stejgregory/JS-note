(function(exports) {

    function NoteListView(noteList) {
        this.noteList = noteList;
    }

    NoteListView.prototype.displayNotes = function () {
      var notes = this.noteList.showNotes();
      var list = notes.map(function(note) {
          return "<li><div>" + note.getText() + "</div></li>";
      }).join("");
      return list;
    };

    exports.NoteListView = NoteListView;
    exports.displayNotes = this.displayNotes;

})(this);


//
// var myStringArray = ["Hello","World"];
// var arrayLength = myStringArray.length;
// for (var i = 0; i < arrayLength; i++) {
//     alert(myStringArray[i]);
//     //Do something
// }
