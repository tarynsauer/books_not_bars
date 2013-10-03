var StackedBarChart = function(){

  this.margin = {top: 20, right: 20, bottom: 30, left: 40};
  this.width = 760 - this.margin.left - this.margin.right;
  this.height = 400 - this.margin.top - this.margin.bottom;


  this.x = d3.scale.ordinal()
      .rangeRoundBands([0, this.width], .1);

  this.y = d3.scale.linear()
      .rangeRound([this.height, 0]);

}

StackedBarChart.prototype.render = function(){
  var self = this
  this.svg = d3.select("#bar_chart_holder").append("svg")
      .attr("width", self.width + self.margin.left + self.margin.right)
      .attr("height", self.height + self.margin.top + self.margin.bottom)
    .append("g")
      .attr("transform", "translate(" + self.margin.left + "," + self.margin.top + ")");

  this.xAxis = d3.svg.axis()
      .scale(self.x)
      .orient("bottom");

  this.yAxis = d3.svg.axis()
      .scale(self.y)
      .orient("left")
      .tickFormat(d3.format(".2s"));
}
 


StackedBarChart.prototype.fetchData = function(){
  var self = this
  $.get('/', function(response){

    console.log(response);

    self.parseData(response.bar_stats);

  })
}


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


  color.domain(d3.keys(state_pick2).filter(function(key) { return key !== "name"; }));
  data.forEach(function(d) {
    this.y0 = 0;
    // console.log(d.total_spending) 
    d.ages = color.domain().map(function(name) { return {name: name, y0: y0, y1: y0 += +d.name}; });
    d.total = d.total_spending.length
  });

    // data.sort(function(a, b) { return b.total - a.total; });

    self.x.domain(data.map(function(d) { return d.name; }));
    self.y.domain([0, d3.max(data, function(d) {return d.total_spending; })]);

    
    self.svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + self.height + ")")
        .call(self.xAxis);

    self.svg.append("g")
        .attr("class", "y axis")
        .call(self.yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Spending");
    var array_data = _.values(data)

    console.log("A=-=========================================================================")
    console.log(array_data)


    var state = self.svg.selectAll(".state")
        .data(data)
      .enter().append("g")
        .attr("class", "g")
        .attr("transform", function(d) { return "translate(" + self.x(d.name) + ",0)"; });

    state.selectAll("rect")
        .data(function(d) { return d.total_spending; })
      .enter().append("rect")
        .attr("width", self.x.rangeBand())
        .attr("y", function(d) { return self.y(0); })
        .attr("height", function(d) { return self.y(d.total_spending); })
        .style("fill", function(d) { return color(d.name); });

    // var legend = self.svg.selectAll(".legend")
    //     .data(color.domain().slice().reverse())
    //   .enter().append("g")
    //     .attr("class", "legend")
    //     .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

    // legend.append("rect")
    //     .attr("x", self.width - 18)
    //     .attr("width", 18)
    //     .attr("height", 18)
    //     .style("fill", color);

    // legend.append("text")
    //     .attr("x", self.width - 24)
    //     .attr("y", 9)
    //     .attr("dy", ".35em")
    //     .style("text-anchor", "end")
    //     .text(function(d) { return d; });
  }


//===================END===================//





ready = function() {
  var stackedbar = new StackedBarChart();
  stackedbar.render();
  stackedbar.fetchData();
}


$(document).ready(ready);
$(document).on('page:load', ready);




