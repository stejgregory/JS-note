var noteList = new NoteList();

noteList.addNote("Favourite drink: seltzer");

var noteView = new NoteView(noteList);
noteController = new NoteController(noteView);
noteController.showList();
