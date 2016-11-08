(function(exports) {

    function Notes() {
        this.notesArray = []
    }

    Notes.prototype.saveNote = function(text) {
        var note = new Note(text);
        this.notesArray.push(note);
    }
    exports.Notes = Notes;
    exports.saveNote = this.saveNote;
})(this);