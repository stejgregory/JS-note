function testSingleNote () {
  var note = new Note("Bob");
  var singleNote = new SingleNote(note);
  assert.isTrue(singleNote.returnHTML === '<div>Bob</div>');
}

testSingleNote();
