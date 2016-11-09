function testNoteList(text) {
    var noteList = new NoteList();
    noteList.saveNote(text);
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.noteList === noteList);
}

testNoteList("Vil du bli med meg hjem og høre meg spille ukulele")


function testReturnHTML() {
    var text = "Jeg drar frem min ukulele"
    var noteList = new NoteList();
    noteList.saveNote(text);
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.returnHTML() === "<li><div>Jeg drar frem min ukulele</div></li>")
}

testReturnHTML();
