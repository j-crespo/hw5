function setup() { 
  createCanvas(400, 400);
  background(255);
  stroke(0);

	for (var i = 0; i < 100; i++) {
	
		var x = random(400);
		var y = random(400);
		while (x < 400) {
			line(x, random (400), y, random (400));
			x = x + 400;
			y = y + 400;
		}
	}
}
