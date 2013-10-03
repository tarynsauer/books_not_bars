var StackedBarChart = function(){

  this.margin = {top: 30, right: 20, bottom: 30, left: 80};
  this.width = 1460 - this.margin.left - this.margin.right;
  this.height = 200 - this.margin.top - this.margin.bottom;


  this.x = d3.scale.ordinal()
    .rangeRoundBands([0, this.width], .1);

  this.y = d3.scale.linear()
    .range([this.height, 0]);

}

StackedBarChart.prototype.render = function(){
  var self = this
  this.svg = d3.select("#bar_chart_holder").append("svg")
      .attr("width", self.width + self.margin.left + self.margin.right)
      .attr("height", self.height + self.margin.top + self.margin.bottom)
      .attr("class", "chart_two")
    .append("g")
      .attr("transform", "translate(" + self.margin.left + "," + self.margin.top + ")");

  this.xAxis = d3.svg.axis()
    .scale(self.x)
    .orient("bottom");

  this.yAxis = d3.svg.axis()
    .scale(self.y)
    .orient("left");
}
 


StackedBarChart.prototype.fetchData = function(){
  var self = this
  
  $.get('/', function(response){

    // console.log(response);

    self.parseData(response.bar_stats);

  })
}


StackedBarChart.prototype.animateBars = function(state) {
    var self = this
    this.bars.transition()
      .duration(2000)
      .attr("height", function(d) { return self.height - self.y(d.total_spending); });;
  };


StackedBarChart.prototype.parseData = function(data){
  var self = this

  console.log(typeof (data));
  console.log(data);

  var color = d3.scale.ordinal()
      .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

  var state_pick = _.find(data, function(state){
    return state.name == "California"
  })
  console.log(state_pick);

  var state_pick2 =  _.keys(state_pick)

  console.log(state_pick2);
  
  // data.sort(function(a, b) { return b.total_spending - a.total_spending; });

  self.x.domain(data.map(function(d) { return d.abrev; }));
  self.y.domain([0, d3.max(data, function(d) { return d.total_spending; })]);
  
  self.svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + self.height + ")")
      .call(self.xAxis);

  self.svg.append("g")
      .attr("class", "y axis")
      .call(self.yAxis)
    .append("text")
      .attr("y", 0)
      .attr("x", 5)
      .attr("dy", "0em")
      .style("text-anchor", "end")
      .text("Spending");

  this.bars = self.svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return self.x(d.abrev); })
      .attr("width", self.x.rangeBand())
      .attr("y", function(d) { return self.y(d.total_spending); })
      .attr("height", function(d) { return 0; })
      .transition()
      .duration(3000)
      .attr("height", function(d) { return self.height - self.y(d.total_spending); });;
  }


//===================END===================//





ready = function() {
  var stackedbar = new StackedBarChart();
  stackedbar.render();
  stackedbar.fetchData();
}


$(document).ready(ready);
$(document).on('page:load', ready);




