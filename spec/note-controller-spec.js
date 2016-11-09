function testNoteController() {
  var noteList = new NoteList();
  noteList.saveNote("Apples");
  var controller = new NoteController(noteList);
  assert.isTrue(controller.noteListView instanceof NoteListView);
}

testNoteController();

function testInsertNotes() {
  var noteList = new NoteList();
  noteList.saveNote("Cheese");
  var controller = new NoteController(noteList);

  var dummyElement = document.createElement('div', {id: 'app'});
  document.getElementById = function() {
    return dummyElement;
  };
  var notes = controller.noteListView.displayNotes();
  document.getElementById('app').innerHTML = notes;
  assert.isTrue(dummyElement.innerHTML === notes);
}

testInsertNotes();
