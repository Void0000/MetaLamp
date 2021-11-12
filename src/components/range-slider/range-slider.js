import './range-slider.scss'
import noUiSlider from 'nouislider';




jQuery(function(){
    var nonLinearSlider = document.getElementById('nonlinear');
  
    noUiSlider.create(nonLinearSlider, {
      connect: true,
      step:100,    
      start: [5000, 10000],
      behaviour: 'tap',
      range: {
          'min': [200],
          'max': [16000], },
          tooltips:false,
          format: wNumb({
              decimals: 0,
              thousand: ' '
          })
  });
  var nodes = [
    document.querySelector('.range-slider__lower-value'), // 0
    document.querySelector('.range-slider__upper-value')  // 1
  ];
  
  nonLinearSlider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
    nodes[handle].innerHTML = values[handle] + '&#x20bd;';
  });
  });