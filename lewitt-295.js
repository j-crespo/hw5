function setup() {
	createCanvas(400, 400);
	background(0);
	stroke(255);


	var diameter = 400;

		noFill();
		ellipse(200, 200, diameter, diameter);
		rect(0, 0, width-1, height-1);
		line(100, 0, 0, 400);
		line(100, 0, 100, 400);
		line(200, 0, 0, 400);
	  line(200, 0, 400, 400);
		line(300, 0, 400, 400);
		line(300, 0, 300, 400);
		line(400, 0, 300, 400);
}
