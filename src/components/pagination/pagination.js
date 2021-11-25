import './pagination.scss'
import '../../plugins/simple-pagination/jquery.simplePagination'


jQuery(function($){
    $('.pages').pagination({
        items: 15,
        itemsOnPage: 1,
        displayedPages: 3,
        edges: 1,
        ellipsePageSet: true,
        cssStyle: 'light-theme',
        prevText:'',
        nextText:'arrow_forward'
    });
});



