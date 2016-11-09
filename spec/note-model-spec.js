'use strict';

function testNoteReturnsText() {
  var note = new Note("Hello World");
  assert.isTrue(note.returnText() === "Hello World");
};

testNoteReturnsText();
