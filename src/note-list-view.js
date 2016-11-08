'use strict';

(function(exports) {

  function View(list){
    this.viewList = list.showAllNotes();
  }

  View.prototype.convertToHTML = function (view.viewList) {
   return "<ul><li><div>" + list + "</div></li></ul>";
  };

exports.View = View;

})(this);
