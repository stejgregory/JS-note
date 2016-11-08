function testNoteList(text) {
  var noteList = new NoteList();
  noteList.saveNote(text);
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.noteListStore === noteList);
}
