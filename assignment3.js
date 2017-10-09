var agents = [];

function setup() {
  createCanvas(400, 400);
  for (var i = 0; i < 30; i++) {
    agents.push({
      x: random(width),
      y: random(height),
      angle: random(TWO_PI),
      state: floor(random(3))
    });
  }
}

function draw() {
  rectMode(CENTER);
  background(220);
  
  agents.forEach(activateAgent);
  agents.forEach(drawAgent);
}

function drawAgent(agent) {
	colorMode(HSB);
  push();
  translate(agent.x, agent.y);
  rotate(agent.angle);
  stroke(0);
  fill(20, 120, 200);
  rect(0, 0, 20, 10);
  fill(20, 120, 80);
	noStroke();
  rect(0, 0, 2, 2);
  pop();
}

function activateAgent(agent) {
  if (random(100) < 1) {
    agent.state = floor(random(3));
  }

  if (agent.state == 1) {
    agent.angle += PI / 200;
  }

  if (agent.state == 2) {
    agent.x += cos(agent.angle) / 1;
    agent.y += sin(agent.angle) / 1;

    if (agent.x > width) {
      agent.x = 0;
    } else if (agent.x < 0) {
      agent.x = width;
    }

    if (agent.y > height) {
      agent.y = 0;
    } else if (agent.y < 0) {
      agent.y = height;
    }
  }
}
