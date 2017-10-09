var circle = {
	x: 100,
	y: 100,
	vx: 0,
	vy: -6,
	r: 10,
	h: 40
};

var circle2 = {
	x: 120,
	y: 160,
	vx: 0,
	vy: -8,
	r: 10,
	h: 50
};

var circle3 = {
	x: 140,
	y: 220,
	vx: 0,
	vy: -4,
	r: 20,
	h: 60
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
	resetY(circle);
	resetY(circle2);
	resetY(circle3);
}

function paint(circle) {
	fill(circle.h, 10, 120);
	ellipse(circle.x, circle.y, circle.r * 2, circle.r * 2);
}

function resetY(circle) {
	if (circle.y > height || circle.y < 0) {
		circle.y = height;
	}
}

function move(circle) {
	circle.x += random(-4, 4); // circle.x = circle.x + circle.vx
	circle.y += circle.vy;

}

function bounce(circle) {
	if (circle.x > width || circle.x < 0) {
		circle.vx = -circle.vx;
	}
	if (circle.y > height || circle.y < 0) {
		circle.vy = -circle.vy;
	}
}
