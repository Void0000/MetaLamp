import './dropdown-guests.scss'
import '../../index.scss'

$(function openMenu(){
    $('.dropdown-guests__input-js-open').on('click', function() {
      $( '.dropdown-guests__menu').toggleClass('dropdown-guests__menu--opened');
  });
});

$(function changeClassInput(){
  $('.dropdown-guests__input-js-open').on('click', function() {
    $( '.dropdown-guests__input').toggleClass('dropdown-guests__input--opened')
});
});

  
