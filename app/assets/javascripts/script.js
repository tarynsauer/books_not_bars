
var Map = function(selector){
  this.elem = $(selector); 
  this.elem.vectorMap({
    map: 'usa_en',
    enableZoom: true,
    showTooltip: true
  });
};

Map.prototype.statChange = function(){
  var self = this;
  $('#vmap').on('regionClick.jqvmap',
    function(event, code, region){
      self.assignStats(code);
  });
}

Map.prototype.assignStats = function(state){
  $()
}



var State = function(){
}

$(document).ready(function() {
    var map = new Map('#vmap');
    map.statChange();
    console.log(map);
  });
