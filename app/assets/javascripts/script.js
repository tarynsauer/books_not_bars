
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
    this.chart_width = (w + 50 ) * data_array.length;
    
    var data_max = d3.max(data_array)
    this.chart_height = data_max

    this.x = d3.scale.linear().domain([0, data_array.length]).rangeRound([0, this.chart_width]);

    this.y = d3.scale.linear().domain([0, data_max]).rangeRound([0,h]);
  };

  ChartTable.prototype.render = function() {
    var self = this

    this.chart = d3.select("#chart_holder").append("svg")
      .attr("class", "chart")
      .attr("width", self.chart_width)
      .attr("height", self.h);

    this.bars = this.chart.selectAll("rect")
      .data(self.data_array)
      .enter().append("rect")
      .attr("x", function(d,i) { return self.x(i) + 45; })
      .attr("y", function(d) { return self.h}  )
      .attr("width", self.w)
      .attr("height", self.h);

    var svg = self.chart

    var yAxis = d3.svg.axis()
      .scale(self.y)
      .tickSize(self.chart_height)
      .orient("right");
    
    var gy = self.chart.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .call(self.customAxis);

  }

  ChartTable.prototype.customAxis = function() {
    var self = this
    this.selectAll("text")
        .attr("x", 2)
        .attr("y", -5);
  }

  ChartTable.prototype.animateBars = function(time) {
    var self = this
    this.bars.transition()
      .duration(2000)
      .style("margin", '0')
      .attr("y",function(d) { return self.h - self.y(d) - .5; });
  };

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
     $('#donut_holder').children().remove();
      self.elem.attr('class', 'display');

      $('#close').show(); 
    

      $.post('/update',{ state: region }, function(response){
        var data_array = [response.pupil_cost, response.inmate_cost]        
        var chart = new ChartTable(40, 400, data_array);
        


// =================================================================
        var my_donut = new DonutChart(560, 300, "test_data.csv");
        my_donut.renderDonut();
        my_donut.buildArc();
        my_donut.buildCircle();
        my_donut.getCSV();
// =================================================================

      $('#close').show();
      $('.stats').show();

      $.post('/update', { state: region }, function(response){
        var data_array = [response.pupil_cost/900, response.inmate_cost/900]
        var chart = new ChartTable(20, 80, data_array);


        chart.render();
        chart.animateBars(2000);
        self.assignStats(region, '$'+ response.pupil_cost, '$'+ response.inmate_cost)
      })
  });
}

Map.prototype.assignStats = function(state, pupil_cost, inmate_cost){
  $('#state').text(state)
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


    var map = new Map('#vmap');
    
    map.statChange();

    $("#close").on('click', function(event){
      $("#vmap").attr('class', 'center');
      $('#close').hide();
    })

  });







  })
});

