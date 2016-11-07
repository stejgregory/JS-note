function testNoteListReturnsNotes() {
  var noteList = new NoteList();

  noteList.addNote("Hello Glasgae");
  console.log(noteList.returnNotes()[0].returnText());

  if (noteList.returnNotes()[0].returnText() !== "Hello Glasgae") {
    console.log("You arenae displaying 'e note pal")
  }
  else { console.log("Passed: " + noteList.returnNotes()[0].returnText()) }
}

testNoteListReturnsNotes();
