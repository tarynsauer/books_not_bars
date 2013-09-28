
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
    // console.log(this);
    // calculate the top position of each section relative to the top of zone 1
    //compare the top

    // console.log("scrollY", this.scrollY);
    // console.log("situationDiv.offset.top", $('#situation').offset().top);
    // console.log("factsDiv.offset.top", $('#facts').offset().top);
    // console.log("exploreDiv.offset.top", $('#explore').offset().top);
    // console.log("toolkitDiv.offset.top", $('#toolkit').offset().top);

    var situationTop = 0;
    var factsTop = $('#facts').offset().top - situationTop;
    var exploreTop = $('#explore').offset().top - situationTop;
    var toolkitTop = $('#toolkit').offset().top - situationTop;

    var screenTop = this.scrollY - situationTop;

    var a1 = $('a#1');
    var a2 = $('a#2');
    var a3 = $('a#3');
    var a4 = $('a#4');

    var a1top = $('a#1').offset().top + $('#situation').offset().top;
    var a2top = $('a#2').offset().top + $('#situation').offset().top;
    var a3top = $('a#3').offset().top + $('#situation').offset().top;
    var a4top = $('a#4').offset().top + $('#situation').offset().top;


    console.log("screenTop", screenTop);
    console.log("situationTop", situationTop);
    console.log("factsTop", factsTop);
    console.log("exploreTop", exploreTop);
    console.log("toolkitTop", toolkitTop);

    console.log("a1top", a1top);
    console.log("a2top", a2top);
    console.log("a3top", a3top);
    console.log("a4top", a4top);



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

    // if ( Math.abs(screenTop - situationTop)<=70 ) {
    //   // console.log('situation passed');
    //   $('a').removeClass();
    //   $('a').addClass("black");
    // }
    // if ( Math.abs(screenTop - factsTop)<=70 ) {
    //   // console.log('facts passed');
    //   $('a').removeClass();
    //   $('a').addClass("white");
    // }
    // if ( Math.abs(screenTop - exploreTop)<=70 ) {
    //   // console.log('explore passed');
    //   $('a').removeClass();
    //   $('a').addClass("black");
    // }
    // if ( Math.abs(screenTop - toolkitTop)<=70 ) {
    //   // console.log('toolkit passed');
    //   $('a').removeClass();
    //   $('a').addClass("white");
    // }

  });

};

// ========================ON DOCUMENT LOAD======================

$(document).ready(function() {
  $('#close').hide();
  var map = new Map('#vmap');
  map.statChange();
  $("#close").on('click', function(event){
    $("#vmap").attr('class', 'center');
    $('#close').hide();
  })

  linkTransition();

  linkStyler();
});
