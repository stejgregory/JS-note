function testNoteListView() {
  var noteList = new NoteList();
  noteList.addNote("Hello Glasgae");
  noteList.addNote("Bye!");
  var noteView = new NoteView(noteList);

  if (noteView.html() !== "<ul><li><div>Hello Glasgae</div></li><li><div>Bye!</div></li></ul>") {
    console.log("Error: " + noteView.html());
  } else {
    console.log("Passed: " + noteView.html());
  }
}

testNoteListView();
