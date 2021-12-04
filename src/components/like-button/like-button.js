import './like-button.scss'



$(function(){
 
  $('.js-like-button__like' ).on('click', function() {
   
    $('.like-button__like' ).toggleClass('like-button__like--disliked');
    $('.like-button__count' ).toggleClass('like-button__count--disliked');
    $('.like-button__span-favorite' ).toggleClass('like-button__span-favorite--disliked');

    });
});

$(function(){
  $('.js-like-button__like' ).on('click', function() {
    let icon = document.querySelectorAll('.like-button__span-favorite')
    $(icon).html($(icon).html() == 'favorite' ? 'favorite_border' : 'favorite')
});});


$(function(){
  $('.js-like-button__like').on('click', function() {
      let like = parseInt($('.like-button__count').html());
      if ($(this).hasClass("clicked")) {
          $(this).removeClass("clicked");
          like++;
      } else {
          $(this).addClass("clicked");
          like--;
      }
      $('.like-button__count').html(like)
  });
});




