var circle = {
  x: 100, 
  y: 100,
  vx: 3,
  vy: 4,
  r: 10,
  h: 233
};

var circle2 = {
  x: 120, 
  y: 160,
  vx: 3,
  vy: 4,
  r: 10,
  h: 107
};

var circle3 = {
	x: 140,
	y: 220,
	vx: 2,
	vy: 2,
	r: 20,
  h:109
};

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

function draw() {
  background(255);
  
  paint(circle);
  paint(circle2);
  paint(circle3);
  move(circle);
  move(circle2);
  move(circle3);
  bounce(circle);
  bounce(circle2);
	bounce(circle3);
}


function paint(circle) {
  fill(circle.h, 255, 100);
  ellipse(circle.x, circle.y, circle.r*2, circle.r*2);
}

function move(circle) {
  circle.x += circle.vx; // circle.x = circle.x + circle.vx
  circle.y += circle.vy;
}

function bounce(circle) {
  if (circle.x > width || circle.x < 0) {
    circle.vx = - circle.vx;
  }
  if (circle.y > height || circle.y < 0) {
    circle.vy = - circle.vy;
  }
}
