'use srict';

function returnStoredText() {
  var note = new Note("Please make sense");
  assert.isTrue(note.returnNote() === "Please make sense");
};

function takesTextUponInstantiation() {
  var note = new Note("Our second test");
  assert.isTrue(note._text === "Our second test");
};


returnStoredText();
takesTextUponInstantiation();
