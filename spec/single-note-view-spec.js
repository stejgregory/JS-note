'use strict';

function testSingleNoteView() {
  var note = "Favourite drink: seltzer";
  var singleNoteView = new SingleNoteView(note);

  if(singleNoteView.returnHtmlString() !== "<div>Favourite drink: seltzer</div>") {
    console.log("Error: " + singleNoteView.returnHtmlString());
  } else {
    console.log("Passed: " + singleNoteView.returnHtmlString());
  }
}

testSingleNoteView();
