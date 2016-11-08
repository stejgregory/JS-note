(function(exports) {
  function NoteController(view) {
    this.htmlBody = view.html();
  }

  NoteController.prototype.showList = function() {
    var test = document.getElementById('app')
    test.innerHTML("STRING");
  }

  exports.NoteController = NoteController;
  exports.showList = this.showList;
})(this);
