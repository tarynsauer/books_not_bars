
function Map (selector){
  this.elem = selector; 
  this.elem.vectorMap({
    map: 'usa_en',
    enableZoom: true,
    showTooltip: true,
    selectedRegion: 'MO'
};



$(document).ready(function() {
    var map = new Map('#vmap');
    });
  });
