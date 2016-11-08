(function(exports) {

    function NoteList() {
        this.notesArray = [];
    }

    NoteList.prototype.saveNote = function(text) {
        var note = new Note(text);
        this.notesArray.push(note);
    };

    NoteList.prototype.showNotes = function(text) {
        return this.notesArray;
    };

    exports.NoteList = NoteList;
    exports.saveNote = this.saveNote;
})(this);
