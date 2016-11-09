function testNotesStore(text) {
    var noteList = new NoteList();
    noteList.saveNote(text);
    assert.isTrue(noteList.notesArray[0] instanceof Note);
}

testNotesStore("Hjelp");

function testNotesReturn(text) {
    var noteList = new NoteList();
    noteList.saveNote(text);
    noteList.saveNote(text);
    assert.isTrue(noteList.showNotes().length === 2);
}

testNotesReturn("Hei på deg");
