
function testNotesStore() {
  var note = new Note('Random Text');
  var notes = new Notes();
  notes.saveNote(note);
  assert.isTrue(notes.notesArray[0] === note)
}

testNotesStore();
