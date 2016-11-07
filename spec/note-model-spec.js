function testNoteReturnsText() {
  var note = new Note("Hello World")

  if (note.text() != "Hello World") {
    throw new Error("Note is not returning text")
  }
};

testNoteReturnsText();
