$(document).ready(function() {
  
  var closePopup = '.close-add'

  $('.button-add-case').click(function() {
    $('.add-case-popup').css('display','table');
  });
  $('.button-edit-case').click(function() {
    $('.edit-case-popup').css('display','table');
  });
  $('.button-delete-case').click(function() {
    $('.delete-case-popup').css('display','table');
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
    $('.invite-user-popup').css('display','table');
  });
  $('.button-edit-user').click(function() {
    $('.edit-user-popup').css('display','table');
  });
  $('.button-delete-user').click(function() {
    $('.delete-user-popup').css('display','table');
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

  //upload
  $('.button-add-file').click(function() {
    $('.add-file-popup').css('display','table');
  });
  $('.button-delete-file').click(function() {
    $('.delete-file-popup').css('display','table');
  });
  $('.button-edit-file').click(function() {
    $('.edit-file-popup').css('display','table');
  });

  $(closePopup).click(function() {
    $('.add-file-popup').css('display','none');
  });
  $(closePopup).click(function() {
    $('.delete-file-popup').css('display','none');
  });
  $(closePopup).click(function() {
    $('.edit-file-popup').css('display','none');
  });
});

