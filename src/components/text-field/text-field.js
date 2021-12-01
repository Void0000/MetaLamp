import '../../index.scss'
import './text-field.scss'
import '../../plugins/mask-input/mask-input'

$(function(){
    $('[name=masked-text-field]').mask('00.00.0000' ,{placeholder:'ДД.ММ.ГГГГ'} )
     
   });


