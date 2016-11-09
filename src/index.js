var note = new Note('Favourite Drink: Pepsi');
var noteList = new NoteList();
noteList.saveNote(note);

var controller = new NoteController(noteList);

controller.insertNotes();
