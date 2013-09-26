
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
  var recidivism = '80%'
  var inmate_cost = '35,000'
  var pupil_cost = '8,000'
  $('#recidivism').text(recidivism)
  $('#inmate_cost').text(inmate_cost)
  $('#pupil_cost').text(pupil_cost)
}



var State = function(){
}

$(document).ready(function() {
    var map = new Map('#vmap');
    map.statChange();
    console.log(map);
  });
