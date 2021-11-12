import '../../index.scss'
import './filter-date-dropdown.scss'
import '../../plugins/air-datepicker/air-datepicker'




var $start = $('#start'),
    $end = $('#end');

$start.datepicker({
    onSelect: function (fd, date) {
        $end.data('datepicker')
                .update('minDate', date);

        $end.focus();
    }
})

$end.datepicker({
    onSelect: function (fd, date) {
        $start.data('datepicker')
                .update('maxDate', date)
    }
})



$(function openDatePicker(){
    $('#start_one_filter').on("click",function() {
      $('.active').show();
    });});