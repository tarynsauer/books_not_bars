
var DonutChart = function(w, h, file){
  this.width = w;
  this.height = h;
  this.radius = Math.min(w, h) / 2;
  this.color = d3.scale.ordinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
}
// =================================================================

DonutChart.prototype.buildCircle = function() {
  this.pieChart = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d.population; });
}

DonutChart.prototype.getCSV = function() {
  var self = this
  var svg = this.donut

  d3.csv("test_data.csv", function(error, data) {
    data.forEach(function(d) {
      d.population = +d.population;
    });

  this.g = svg.selectAll(".arc")
      .data(self.pieChart(data))
    .enter().append("g")
      .attr("class", "arc");

    g.append("path")
      .attr("d", self.arc)
      .style("fill", function(d) { return self.color(d.data.age); });

    g.append("text")
      .attr("transform", function(d) { return "translate(" + self.arc.centroid(d) + ")"; })
      .attr("dy", ".25em")
      .style("text-anchor", "middle")
      .text(function(d) { return d.data.age; });
  });
}
// =================================================================
DonutChart.prototype.buildArc = function(){
  var svg = this.donut
  var self = this

  this.arc = d3.svg.arc()
    .outerRadius(self.radius - 10)
    .innerRadius(self.radius - 70);
 
}

// =================================================================

DonutChart.prototype.renderDonut = function() {
  var self = this

  this.donut = d3.select('#donut_holder').append('svg')
    .attr("class", "donut")
    .attr("width", self.width)
    .attr("height", self.height)
    .append("g")
    .attr("transform", "translate(" + self.width / 2 + "," + self.height / 2 + ")");

    // var totalLength = path.node().getTotalLength();
    // path
    //   .attr("stroke-dasharray", totalLength + " " + totalLength)
    //   .attr("stroke-dashoffset", totalLength)
    //   .transition()
    //     .duration(2000)
    //     .ease("linear")
    //     .attr("stroke-dashoffset", 0);
}
// =================================================================

// =================================================================
DonutChart.prototype.animateDonut = function() {
  var self = this
  // $('.arc').hide();
  // $('.arc').css();
    // .attr("y",function(d) { return self.height - self.width(d) - .5; });
}

$(document).ready(function() {
    // var my_donut = new DonutChart(300, 300, "test_data.csv");

    // my_donut.renderDonut();
    // my_donut.buildArc();
    // my_donut.buildCircle();
    // my_donut.getCSV();

});


