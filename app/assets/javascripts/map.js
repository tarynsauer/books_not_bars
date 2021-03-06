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


  var ChartTable = function(w, h, data_object){
    this.w = w;
    this.h = h;
    this.data_array = [data_object.edu_per_capita, data_object.inc_per_capita];
    
    this.chart_width = (w + 80 ) * this.data_array.length;
    console.log(this.data_array)
    
    var data_max = d3.max(this.data_array);
    this.chart_height = data_max + 20;

    this.x = d3.scale.linear().domain([0, this.data_array.length]).range([0, this.chart_width]);

    this.y = d3.scale.linear().domain([0, data_max]).range([h,0]);
  };

  ChartTable.prototype.render = function() {
    var self = this

    this.chart = d3.select("#chart_holder").append("svg")
      .attr("class", "chart")
      .attr("width", self.chart_width)
      .attr("height", self.h);

    this.bars = this.chart.selectAll("rect")
      .data(self.data_array)
      .enter().append("svg:rect")
      .attr("x", function(d,i) { return self.x(i) +50; })
      .attr("y",  function(d) { return self.y(d)+self.h; })
      .attr("width", self.w)
      .attr("height", self.h);

    var svg = self.chart

    var yAxis = d3.svg.axis()
      .scale(self.y)
      .tickSize(500)
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
        .attr("y", 10);
  }

  ChartTable.prototype.animateBars = function(time) {
    var self = this
    this.bars.transition()
      .duration(1000)
      .attr("y", function(d) { return self.y(d); });
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
     
      self.elem.attr('class', 'display');
      $('#close').show(); 
      $('#typo_stats').children('ul').slideDown('2000', function() {});(1000); 
        
      
      $('#bar_chart_holder').show();

      $.post('/map/update',{ state: region }, function(response){
        
        var data_array = response.stats       
        var p_code =  '.' + data_array.postal_abbrev
        console.log(data_array.postal_abbrev)
        console.log(p_code)
        
    

        $('.bar_two').css("fill", "rgba(21,21,21,0.9)")
        $(p_code).css("fill", "rgba(225,225,225,1)")
        var chart = new ChartTable(40, 500, data_array);
  
// =================================================================
      
// =================================================================
        stackedbar.animateBars();  
        chart.render();
        chart.animateBars(2000);
        self.assignStats(region, data_array.spending_ratio, '$'+ data_array.total_spending, '$'+ data_array.edu_per_capita, '$'+ data_array.inc_per_capita, data_array.latinos_in_prison_per100k, data_array.whites_in_prison_per100k, data_array.blacks_in_prison_per100k)
      })
  }); 
}

Map.prototype.assignStats = function(state, spending_ratio, total_spending, pupil_cost, inmate_cost, latino, white, black){
  $('#state').text(state)
  $('#total_spending').text(total_spending)
  $('#spending_ratio').text(spending_ratio)
  $('#inmate_cost').text(inmate_cost)
  $('#pupil_cost').text(pupil_cost)
  $('#state_info').text(state)
  $('#latinos_in_prison').text(latino)
  $('#whites_in_prison').text(white)
  $('#blacks_in_prison').text(black)
}

ready = function() {
  $('#close').hide();
  $('#bar_chart_holder').hide();
  $('#typo_stats').children('ul').hide();

  var map = new Map('#vmap');
  map.statChange();

  $("#close").on('click', function(event){
    $("#vmap").attr('class', 'center');
    $('#close').hide();
    $('.chart_two').remove();
      stackedbar = new StackedBarChart();
      stackedbar.render();
      stackedbar.fetchData();
    $('#typo_stats').children('ul').hide();
  });
}


$(document).ready(ready);
$(document).on('page:load', ready);















