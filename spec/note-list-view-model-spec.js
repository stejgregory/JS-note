function testNoteList(text) {
    var noteList = new NoteList();
    noteList.saveNote(text);
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.noteList === noteList);
}

testNoteList("Vil du bli med meg hjem og høre meg spille ukulele");


function testDisplayNotes() {
    var text = "Jeg drar frem min ukulele";
    var noteList = new NoteList();
    noteList.saveNote(text);
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.displayNotes() === "<ul><li><div>Jeg drar frem min ukulele</div></li></ul>");
}

testDisplayNotes();
