
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

      // ========================================================
      var my_donut = new DonutChart(560, 300, "test_data.csv");
      my_donut.renderDonut();
      my_donut.buildArc();
      my_donut.buildCircle();
      my_donut.getCSV();
      // ========================================================

      $('#close').show();
      $('.stats').show();

      chart.render();
      chart.animateBars(2000);
      self.assignStats(region, '$'+ response.pupil_cost, '$'+ response.inmate_cost);
    });
  });
}

Map.prototype.assignStats = function(state, pupil_cost, inmate_cost) {
  debugger
  $('#state').text(state);
  $('#pupil_cost').text(pupil_cost);
  $('#inmate_cost').text(inmate_cost);
}

// ========================Navigation Scripts====================
var linkTransition = function() {
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash,
      $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
}
var linkStyler = function() {
  $(window).scroll( function () {

    var situationTop = 0;
    var factsTop = $('#facts').offset().top - situationTop;
    var exploreTop = $('#explore').offset().top - situationTop;
    var toolkitTop = $('#toolkit').offset().top - situationTop;

    var screenTop = this.scrollY - situationTop;

    var a1 = $('a#1');
    var a2 = $('a#2');
    // var a3 = $('a#3');
    var a4 = $('a#4');

    var a1top = $('a#1').offset().top + $('#situation').offset().top;
    var a2top = $('a#2').offset().top + $('#situation').offset().top;
    var a3top = $('a#3').offset().top + $('#situation').offset().top;
    var a4top = $('a#4').offset().top + $('#situation').offset().top;

    // a1
    if ( a1top>factsTop && a1top<toolkitTop ) {
      console.log('changed a1 class to black');
      $('#1').removeClass();
      $('#1').addClass("white");
    }
    if ( a1top<factsTop ) {
      console.log('changed a1 class to black');
      $('#1').removeClass();
      $('#1').addClass("black");
    }
    if ( a1top>toolkitTop ) {
      console.log('changed a1 class to black');
      $('#1').removeClass();
      $('#1').addClass("black");
    }
    // a2
    if ( a2top>factsTop && a2top<toolkitTop ) {
      console.log('changed a2 class to black');
      $('#2').removeClass();
      $('#2').addClass("white");
    }
    if ( a2top<factsTop ) {
      console.log('changed a2 class to black');
      $('#2').removeClass();
      $('#2').addClass("black");
    }
    if ( a2top>toolkitTop ) {
      console.log('changed a2 class to black');
      $('#2').removeClass();
      $('#2').addClass("black");
    }
    //a3
    if ( a3top>factsTop && a3top<toolkitTop ) {
      console.log('changed a3 class to black');
      $('#3').removeClass();
      $('#3').addClass("white");
    }
    if ( a3top<factsTop ) {
      console.log('changed a3 class to black');
      $('#3').removeClass();
      $('#3').addClass("black");
    }
    if ( a3top>toolkitTop ) {
      console.log('changed a3 class to black');
      $('#3').removeClass();
      $('#3').addClass("black");
    }
    //a4
    if ( a4top>factsTop && a4top<toolkitTop ) {
      console.log('changed a4 class to black');
      $('#4').removeClass();
      $('#4').addClass("white");
    }
    if ( a4top<factsTop ) {
      console.log('changed a4 class to black');
      $('#4').removeClass();
      $('#4').addClass("black");
    }
    if ( a4top>toolkitTop ) {
      console.log('changed a4 class to black');
      $('#4').removeClass();
      $('#4').addClass("black");
    }
  });
};
// ========================ON DOCUMENT LOAD======================

$(document).ready(function() {

  // Link Transition Function
  linkTransition();
  // Link Styler Function
  linkStyler();


  $('#close').hide();
  var map = new Map('#vmap');
  map.statChange();
  $("#close").on('click', function(event){
    $("#vmap").attr('class', 'center');
    $('#close').hide();
  });
});

