function testNoteText(text) {
  var note = new Note(text);
  assert.isTrue(note.text === text);
}

testNoteText("I don't love javascript");
