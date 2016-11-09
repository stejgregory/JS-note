function testNoteList(text) {
    var noteList = new NoteList();
    noteList.saveNote(text);
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.noteList === noteList);
}

testNoteList("Vil du bli med meg hjem og høre meg spille ukulele");


function testDisplayNotes() {
    var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idemque diviserunt naturam hominis in animum et corpus. Totum autem id externum est,";
    var noteList = new NoteList();
    noteList.saveNote(text);
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.displayNotes() === "<ul><li><div>Lorem ipsum dolor si...</div></li></ul>");
}

testDisplayNotes();
