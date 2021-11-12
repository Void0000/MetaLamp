import '../../index.scss'
import './date-dropdown.scss'
import '../../plugins/air-datepicker/air-datepicker'

$(function(){
    $( ".datepickerButton" ).appendTo( $( ".datepicker" ) );
  });  
  
  $(function(){
    $('#start_one').datepicker({ 
      clearButton: true,
      onSelect: function (fd, d, picker) { 
        $("#start_one").val(fd.split("-")[0]);
        $("#end_one").val(fd.split("-")[1]);
      }
    });
  });

  // document.querySelector('input#end_one').setAttribute('placeholder','$');
  
    $(function closeDatePicker(){
      $('.apply').on("click",function() {
        $('.active').hide();
      });});
  
      $(function openDatePicker(){
        $('#start_one').on("click",function() {
          $('.active').show();
        });});
  
     let dateVaule = $("start_one").val();
  
     $(function(){
      $('#start_one_filter').datepicker({ 
        clearButton: true,
        range: true,
        dateFormat: "d M",
        onShow: function (dp, animationCompleted) {
          if (!animationCompleted) {
             if (dp.$datepicker.find('button').html()===undefined) { /*ONLY when button don't existis*/
                dp.$datepicker.append('<button type="button" class="uk-button uk-button-default uk-button-small uk-width-1-1 uk-margin-small-bottom" disabled="disabled"><i class="fas fa-check"></i> Ready</button>');
                dp.$datepicker.find('button').click(function(event) {
                   dp.hide();
                });
             }
          }
       },
       onSelect: function (formattedDate, date, dp) {
          if (formattedDate.length>0) {
             dp.$datepicker.find('button').prop('disabled', false).removeClass('uk-button-default').addClass('uk-button-primary');
          } else {
             dp.$datepicker.find('button').prop('disabled', true).removeClass('uk-button-primary').addClass('uk-button-default');
          }
       }
      });
    });

    console.log('.datepicker')