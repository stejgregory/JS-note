function testNoteHasID(text) {
  var noteID = new Note(text);
  console.log(noteID.id);
  assert.isTrue(noteID.id === 0);
}

testNoteHasID("Adding an ID to a Not!");

function testNoteText(text) {
  var note = new Note(text);
  assert.isTrue(note.text === text);
}

testNoteText("I don't love javascript");

function testGetText(text) {
  var note = new Note(text);
  assert.isTrue(note.getText() === text);
}

testGetText("Hjelp meg vær så snill");

function testNoteIncrementsIDByOne() {
  var note1 = new Note('This is a Note with an ID of 1');
  var note2 = new Note('This is a Note with an ID of 2');
  assert.isTrue(note1.id === 0);
  assert.isTrue(note2.id === 1);
}

testNoteIncrementsIDByOne();
