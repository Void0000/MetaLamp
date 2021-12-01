import './dropdown.scss'
import '../../index.scss'

$(function openRoomsMenu(){
    $('input[name=dropdown-rooms]').on('click', function() {
      $( '.dropdown--rooms .dropdown__menu').toggleClass('dropdown__menu--opened');
      $( '.dropdown--rooms .dropdown__input').toggleClass('dropdown__input--opened')
  });
});

$(function openGuestsMenu(){
  $('input[name=dropdown-guests]').on('click', function() {
    $( '.dropdown--guests .dropdown__menu').toggleClass('dropdown__menu--opened');
    $( '.dropdown--guests .dropdown__input').toggleClass('dropdown__input--opened')
});
});




  
