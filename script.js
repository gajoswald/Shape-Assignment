// line
// rect, square
// ellipse, circle, arc
// triangle
// fill
// stroke
// reference: https://p5js.org/reference/#group-Shape

// the complete color list:
// https://www.w3schools.com/colors/colors_names.asp
let colorlist = ['aliceblue', 'cornsilk', 'darksalmon', 'darkseagreen', 'gainsboro']
// GA Blue: #003B70
// GA Red: #CF0A2C

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  ellipseMode(RADIUS)
}

function draw() {
  myShape();
}

function myShape() {
  noStroke();
}