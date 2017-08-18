noteList = new NoteList();
Controller = new NoteController(noteList, NoteListView);
Controller.makeUrlChangeToDisplayNoteContent();
Controller.detectSubmitEvent();
