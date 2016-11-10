function testNoteText(text) {
  var note = new Note(text);
  assert.isTrue(note.text === text);
}

function testGetText(text) {
  var note = new Note(text);
  assert.isTrue(note.getText() === text);
}

function testNoteHasID(text) {
  var note = new Note(text);
  actual = note.id;
  expected = 1
  assert.isTrue(actual===expected);
}

function testNoteIDIncrimentsUp() {
  var noteOne = new Note("note1");
  var noteTwo = new Note("note2");
  actual = noteTwo.id;
  expected = 2
  assert.isTrue(actual===expected);
}

testNoteText("I don't love javascript");
testGetText("Hjelp meg vær så snill");
testNoteIDIncrimentsUp();
