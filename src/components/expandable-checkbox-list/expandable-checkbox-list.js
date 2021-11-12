import './expandable-checkbox-list.scss'
import '../../index.scss'


$(document).ready(() => {
    $('.expandable-checkbox-list__title').on('click', function() {
    $( '.expandable-checkbox-list__forms--hidden').toggleClass( " expandable-checkbox-list__forms--visible ")
});});


$(document).ready(() => {
  $('.expandable-checkbox-list__title').on('click', function() {
  $( '.expandable-checkbox-list__title').toggleClass( "expandable-checkbox-list__title--expandLess")
});});
// $(document).ready(() => {
// $('.expandable-checkbox-list__title').on('click', function () {

// });});
 
