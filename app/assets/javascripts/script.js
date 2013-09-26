
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
  $(this.elem).on('regionClick.jqvmap', function(event, code, region){
      console.log(region)
      console.log(code)
      $.post('/update',{ state: region }, function(response){
        console.log(response)
        self.assignStats(region, response.pupil_cost, response.inmate_cost)
      })
  });
}

Map.prototype.assignStats = function(state, pupil_cost, inmate_cost){
  $('#state').text(state)
  // $('#recidivism').text(recidivism)
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
