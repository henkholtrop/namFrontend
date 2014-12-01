$(document).ready(function() {
  $('.button-add').click(function() {
    $('.add-shadow').css('display','block');
  });
  $('.close-add').click(function() {
    $('.add-shadow').css('display','none');
  });
});

$(document).ready( function() {
    $(".button-add").click(function() {
        $(".add-shadow").load("add-case.html");
    });
});