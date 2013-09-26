
var Map = function(selector){
  this.elem = $(selector); 
  this.elem.vectorMap({
    map: 'usa_en',
    backgroundColor: 'none',
    color: '#f4f3f0',
    hoverColor: 'rgba(240,242,241,0.9)',
    selectedColor: 'rgba(21,21,11,1)',
    scaleColors: ['#b6d6ff', '#005ace'],
    normalizeFunction: 'linear',
    enableZoom: false,
    showTooltip: false,
    selectedRegions: null,
    multiSelectRegion: false
  });
};

Map.prototype.statChange = function(){
  var self = this;
  $(this.elem).on('regionClick.jqvmap', function(event, code, region){
      self.elem.attr('class', 'display');
      $('#close').show();
      $('.stats').show();
      $.post('/update',{ state: region }, function(response){
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
    $('#close').hide();
    $('.stats').hide();
    var map = new Map('#vmap');
    map.statChange();
    $("#close").on('click', function(event){
      $("#vmap").attr('class', 'center');
      $('#close').hide();
    $('.stats').hide();
    })
  });
