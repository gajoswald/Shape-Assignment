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
  // myOutlineShape();
}

function myShape() {
  noStroke();
  fill( "#003B70");
  rect(100, 100, 200, 30);
  rect(185,100,30,200);
  // r1 = (215 - 100)/2 = 57.5
  // x1 = 100 + r1 
  arc(157.5,300,57.5,57.5,0,PI);
  fill('white');
  // r2 = r1 - 30 = 27.5
  // x2 = 100 + 30 + r2
  arc(157.5, 300,27.5, 27.5, 0, PI);
  fill( "#003B70");
  rect(100,280,30,20)
  noLoop();
}

function myOutlineShape() {
  stroke("#CF0A2C");
  fill(random(colorlist));
  rect(100, 100, 200, 30);
  fill(random(colorlist));
  rect(185,100,30,200);
  fill(random(colorlist));
  arc(157.5,300,57.5,57.5,0,PI);
  fill('white');
  arc(157.5, 300,27.5, 27.5, 0, PI);
  fill(random(colorlist));
  rect(100,280,30,20)
  noLoop();
}