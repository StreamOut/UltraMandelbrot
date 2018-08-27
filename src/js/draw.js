
function initDraw(width, height){
  var svg = d3.select("body")
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .call(d3.zoom().on("zoom", function () {
              svg.attr("transform", d3.event.transform)
      }))
      .append("g")

  return svg;

}

function drawPixel( x, y, svgContainer){
  var rectangle = svgContainer.append("rect")
                             .attr("x", x)
                            .attr("y", y)
                            .attr("width", 1)
                            .attr("height", 1);
}

function drawColorPixel(color, x, y, svgContainer){
  var rectangle = svgContainer.append("rect")
                             .attr("x", x)
                            .attr("y", y)
                            .attr("width", 1)
                            .attr("height", 1)
                            .style("fill", color);
}





function drawCircles(){
var jsonCircles = [
  { "x_axis": 30, "y_axis": 30, "radius": 20, "color" : "green" },
  { "x_axis": 70, "y_axis": 70, "radius": 20, "color" : "purple"},
  { "x_axis": 110, "y_axis": 100, "radius": 20, "color" : "red"}];



var circles = svgContainer.selectAll("circle")
                          .data(jsonCircles)
                          .enter()
                          .append("circle");

var circleAttributes = circles
                       .attr("cx", function (d) { return d.x_axis; })
                       .attr("cy", function (d) { return d.y_axis; })
                       .attr("r", function (d) { return d.radius; })
                       .style("fill", function(d) { return d.color; });
}
