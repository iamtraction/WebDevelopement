//Select all text inside '.select' on double click on that.
//Created by @snkrsnkampa
//Link this '.js' file from your html file
//Add the class .select to the tags you want to select on double click
$(document).ready(function() {
  $('.select').dblclick(function() {
    $(this).select();
    var text = this,range,selection;
    if (document.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
  });
});
