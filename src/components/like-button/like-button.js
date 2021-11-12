import './like-button.scss'
import '../../plugins/like-dislike/like-dislike'

$(function(){
    $('#rating').likeDislike({
      initialValue: 0,
      click: function (value, l, d, event) {
          var likes = $(this.element).find('.likes');
          var dislikes = $(this.element).find('.dislikes');
          //var border = $(this.element).find('.firstIcon');
          //var fill = $(this.element).find('.secondIcon');
  
          likes.text(parseInt(likes.text()) + l);
          dislikes.text(parseInt(dislikes.text()) + d);
          //border.text('favorite');
          //fill.text('favorite_border');
      },
  
  // To prevent 'click', you need to return false instead of true.
  beforeClick: null,  // boolean function(event) {}
  
  // Sets the initial value of the vote.
  initialValue: 0,  // number (0, 1 or -1)
  
  // Sets the initial state of the buttons (locks or unlocks).
  readOnly: false,  // boolean
  
  // Enables or disables the possibility to reverse the vote.
  reverseMode: true,  // boolean
  
  // The class name of the Like button.
  likeBtnClass: 'like',  // string
  
  // The class name of the Dislike button.
  dislikeBtnClass: 'dislike',  // string
  
  // The class name of the active button.
  activeClass: 'active',  // string
  
  // The class name of the disabled button.
  disabledClass: 'disabled',  // string
  });
  
  $(".like" ).on('click', function() {
    var text = $('.firstIcon').text();
    var textSecond = $('.secondIcon').text();
      $('.firstIcon').text(
          text == "favorite_border" ? "favorite" : "favorite_border");
      $('.secondIcon').text(
          textSecond == "favorite" ? "favorite_border" : "favorite_border");
  });
  
  $(".dislike" ).on('click',function() {
    var textSecond = $('.secondIcon').text();
    var text = $('.fristIcon').text();
      $('.secondIcon').text(
          textSecond == "favorite" ? "favorite_border" : "favorite");
      $('.firstIcon').text(
          text == "favorite_border" ? "favorite" : "favorite_border");
  });
  
  
  });
  