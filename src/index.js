var noteList = new NoteList();
noteList.saveNote("Apple");
noteList.saveNote("Orange");
var controller = new NoteController(noteList);

controller.insertNotes();
