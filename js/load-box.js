$(document).ready(function() {
  
  var closePopup = '.close-add'

  $('.button-add-case').click(function() {
    $('.add-case-popup').css('display','block');
  });
  $('.button-edit-case').click(function() {
    $('.edit-case-popup').css('display','block');
  });
  $('.button-delete-case').click(function() {
    $('.delete-case-popup').css('display','block');
  });

  $(closePopup).click(function() {
    $('.add-case-popup').css('display','none');
  });
  $(closePopup).click(function() {
    $('.edit-case-popup').css('display','none');
  });
  $(closePopup).click(function() {
    $('.delete-case-popup').css('display','none');
  });

  //Users
  $('.button-invite-user').click(function() {
    $('.invite-user-popup').css('display','block');
  });
  $('.button-edit-user').click(function() {
    $('.edit-user-popup').css('display','block');
  });
  $('.button-delete-user').click(function() {
    $('.delete-user-popup').css('display','block');
  });

  $(closePopup).click(function() {
    $('.invite-user-popup').css('display','none');
  });
  $(closePopup).click(function() {
    $('.edit-user-popup').css('display','none');
  });
  $(closePopup).click(function() {
    $('.delete-user-popup').css('display','none');
  });
});