function testNoteReturnsText() {
  var note = new Note("Hello World");

  if (note.returnText() !== "Hello World") {
    throw new Error("Note is not returning text");
  }
  else { console.log("Passed: " + note.returnText()) }
};

testNoteReturnsText();
