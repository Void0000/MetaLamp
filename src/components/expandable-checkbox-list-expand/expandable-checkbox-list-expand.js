import './expandable-checkbox-list-expand.scss'
import '../../index.scss'


$(document).ready(() => {
    $('.expandable-checkbox-list-expand__title').on('click', function() {
    $( '.expandable-checkbox-list-expand__forms').toggleClass( "expandable-checkbox-list-expand__forms--hidden ")
});});


$(document).ready(() => {
  $('.expandable-checkbox-list-expand__title').on('click', function() {
  $( '.expandable-checkbox-list-expand__title').toggleClass( "expandable-checkbox-list-expand__title--expandLess")
});});
// $(document).ready(() => {
// $('.expandable-checkbox-list-expand__title').on('click', function () {

// });});
