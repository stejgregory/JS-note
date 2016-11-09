'use strict';

function testNoteListReturnsOneNote() {
  var noteList = new NoteList();
  noteList.addNote("Hello Glasgae");
  if (noteList.returnNotes()[0].returnText() !== "Hello Glasgae") {
    console.log("You arenae displaying 'e note pal");
  }
  else { console.log("Passed: " + noteList.returnNotes()[0].returnText()); }
}

function testNoteListReturnsManyNotes() {
  var noteList = new NoteList();
  noteList.addNote("Hello Glasgae");
  noteList.addNote("Hello Belfast");
  if (noteList.returnNotes()[1].returnText() !== "Hello Belfast") {
    console.log("You arenae displaying 'e note pal");
  } else {
    console.log("Passed: " + noteList.returnNotes()[1].returnText());
  }
}

function testNoteListReturnsNoNotes() {
  var noteList = new NoteList();
  emptyArray.isItEmpty(noteList);
}

testNoteListReturnsOneNote();
testNoteListReturnsManyNotes();
testNoteListReturnsNoNotes();
