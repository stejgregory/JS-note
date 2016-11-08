function testNotesStore(text) {
    var notes = new Notes();
    notes.saveNote(text);
    assert.isTrue(notes.notesArray[0] instanceof Note)
}

testNotesStore("Hjelp");

function testNotesReturn(text) {
    var notes = new Notes();
    notes.saveNote(text);
    assert.isTrue(notes.showNotes.length === 1)
}

testNotesReturn("Hei på deg");