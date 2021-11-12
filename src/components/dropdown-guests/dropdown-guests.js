import '../../plugins/item-quantity-dropdown/item-quantity-dropdown'
import './dropdown-guests.scss'
import '../../index.scss'


// $(document).ready(() => {
//     $('.iqdropdown').iqDropdown({ });
//   });

  $(document).ready(() => {

    $('.iqdropdown').iqDropdown({
      // max total items
      maxItems: 10,
      // min total items
      minItems: 0,
      // text to show on the dropdown
      selectionText: 'гость',
      // text to show for multiple items
      textPlural: 'гостей',
      // buttons to increment/decrement
      controls: {
        position: 'right',
        displayCls: 'iqdropdown-item-display',
        controlsCls: 'iqdropdown-item-controls',
        counterCls: 'counter'
      },
      
      // // fires when an item quantity changes
      // onChange: (id, count, totalItems) => {
      //   console.log(id, ' ', count, ' ', totalItems)
      //   if ((totalItems >= 5) || (totalItems === 0)) {
      //     textPlural = 'гостей'
      //   } else if ((totalItems > 1) && (totalItems < 5)) {
      //     textPlural = 'гостя'
      //   } else if (totalItems == 1) {
      //     textPlural = 'гость'
      //   }
      //   document.querySelector('.iqdropdown-selection').innerHTML = totalItems + ' ' + textPlural
      // },
      // // return false to prevent an item decrement
      // beforeDecrement: (id, itemCount) => {
      //   return true
      // },
      // // return false to prevent an item increment
      // beforeIncrement: (id, itemCount) => {
      //   return true
      // }

      
    });
   
  });
