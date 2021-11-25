import './like-button.scss'

$(function(){

  $('.js-like-button__dislike' ).on('click', function() {
  $('.like-button__dislike' ).toggleClass('like-button__dislike--liked')
  });
  
});


$(function(){

  $('.js-like-button__like' ).on('click', function() {
    $('.like-button__like' ).toggleClass('like-button__like--disliked')
    });
});


$(function(){
  $('.js-like-button__dislike').on('click', function() {
      let like = parseInt($('.like-button__dislike').html());
      if ($(this).hasClass("clicked")) {
          $(this).removeClass("clicked");
          like--;
      } else {
          $(this).addClass("clicked");
          like++;
      }
      $('.like-button__dislike').html(like)
  });
});

$(function(){
  $('.js-like-button__like').on('click', function() {
      let like = parseInt($('.like-button__like').html());
      if ($(this).hasClass("clicked")) {
          $(this).removeClass("clicked");
          like++;
      } else {
          $(this).addClass("clicked");
          like--;
      }
      $('.like-button__like').html(like)
  });
});


