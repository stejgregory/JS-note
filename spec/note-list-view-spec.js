'use strict';

function sendNoteAsHTML(){
  var list = new List();
  list.addNote("Convert this to HTML")
  var view = new View(list)
  assert.isTrue(view.convertToHTML(list) === "<ul><li><div>Convert this to HTML</div></li></ul>");
};

sendNoteAsHTML();
