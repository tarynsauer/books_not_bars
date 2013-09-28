
var Map = function(selector){
  this.elem = $(selector);
  this.elem.vectorMap({
    map: 'usa_en',
    backgroundColor: 'none',
    color: "rgba(21,21,21,0.9)",
    selectedColor: 'rgba(155,155,155,0.9)',
    hoverColor: 'rgba(255,255,255,0.9)',
    scaleColors: ['#b6d6ff', '#005ace'],
    normalizeFunction: 'linear',
    enableZoom: false,
    showTooltip: false,
    selectedRegions: null,
    multiSelectRegion: false
  });
};

// =================================================================

  var ChartTable = function(w, h, data_array){
    this.w = w;
    this.h = h;
    this.data_array = data_array;

    this.x = d3.scale.linear()
      .domain([0, 1])
      .range([0, w]);

    this.y = d3.scale.linear()
      .domain([0, 100])
      .rangeRound([0,h]);
  };

  ChartTable.prototype.render = function() {
    var self = this
    this.chart = d3.select("#chart_holder").append("svg")
      .attr("class", "chart")
      .attr("width", this.w * this.data_array.length - 1)
      .attr("height", this.h);

    this.bars = this.chart.selectAll("rect")
      .data(this.data_array)
      .enter().append("rect")
      .attr("x", function(d, i) { return self.x(i) - .5; })
      .attr("y", 100)
      .attr("width", this.w)
      .attr("height", this.y );
  }

  ChartTable.prototype.animateBars = function() {
    var self = this;
    this.bars.transition().attr("y",function(d) { return self.h - self.y(d) - .5; });
  }

  Map.prototype.getCoord = function() {
    $(this.elem).on('click', function(event){
      this.x_coord = event.pageX;
      this.y_coord = event.pageY;
    })
  }

Map.prototype.statChange = function(){

  var self = this;

  $(this.elem).on('regionClick.jqvmap', function(event, code, region){
     $('#chart_holder').children().remove();
      self.elem.attr('class', 'display');
      $('#close').show();
      $('.stats').show();

      $.post('/update', { state: region }, function(response){
        var data_array = [response.pupil_cost/900, response.inmate_cost/900]
        var chart = new ChartTable(20, 80, data_array);

        chart.render();
        chart.animateBars();
        self.assignStats(region, '$'+ response.pupil_cost, '$'+ response.inmate_cost)
      })
  });
}

Map.prototype.assignStats = function(state, pupil_cost, inmate_cost){
  $('#state').text(state)
  // $('#recidivism').text(recidivism)
  $('#inmate_cost').text(inmate_cost)
  $('#pupil_cost').text(pupil_cost)
}

// ========================ON DOCUMENT LOAD======================

$(document).ready(function() {
  $('#close').hide();
  var map = new Map('#vmap');
  map.statChange();
  $("#close").on('click', function(event){
    $("#vmap").attr('class', 'center');
    $('#close').hide();
  })
});
