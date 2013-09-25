
var Map = function(selector){
  this.elem = $(selector); 
  this.elem.vectorMap({
    map: 'usa_en',
    enableZoom: true,
    showTooltip: true
  });
};



$(document).ready(function() {
    var map = new Map('#vmap');
    console.log(map);
  });
