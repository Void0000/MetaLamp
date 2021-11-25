import './dropdown-rooms.scss'
import '../../index.scss'

$(function openMenu(){
    $('.dropdown-rooms__input-js-open').on('click', function() {
      $( '.dropdown-rooms__menu').toggleClass('dropdown-rooms__menu--opened');
  });
});

$(function changeClassInput(){
  $('.dropdown-rooms__input-js-open').on('click', function() {
    $( '.dropdown-rooms__input').toggleClass('dropdown-rooms__input--opened')
});
});

  