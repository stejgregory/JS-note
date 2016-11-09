'use strict';

(function(exports) {
  function SingleNoteView(note) {
    this.singleNote = note;
  }

  SingleNoteView.prototype.returnHtmlString = function() {
    return "<div>" + this.singleNote + "</div>";
  }

  exports.SingleNoteView = SingleNoteView;
})(this);
