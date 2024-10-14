let peas = []; 
let lastX = 0;
let lastY = 0;

function preload() {
  peas[0] = loadImage('https://i.ibb.co/k6pHsPw/1.png');
  peas[1] = loadImage('https://i.ibb.co/xDy31MP/2.png');
  peas[2] = loadImage('https://i.ibb.co/HN3fpgP/3.png');
  peas[3] = loadImage('https://i.ibb.co/txbMQDq/4.png');
  peas[4] = loadImage('https://i.ibb.co/7CWsYHc/5.png');
  peas[5] = loadImage('https://i.ibb.co/tzMt9qc/6.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  Background();
}

function mouseMoved() {
  if (dist(mouseX, mouseY, lastX, lastY) > 100) {
    let randomPea = random(peas);
    let size = random(50, 200);
    image(randomPea, mouseX, mouseY, size, size);
    lastX = mouseX;
    lastY = mouseY;
  }
}

function Background() {
  background(0)
  pop();
  fill(255, 204, 0);
  noStroke();
  ellipse(width - 500,500, 300, 300);
  push();

  randomSeed(42);

  pop();
  for (let i = 0; i < 300; i++) {
    let x = random(width);
    let y = random(height);
    let h = random(1, 5); 
    let s = random(0, 1); 
    let a = random(360); 
    star(x, y, h, s, a);
  }
  push();
}

function star(x, y, h, s, a) {
  push();
  translate(x, y);
  rotate(a);
  stroke(255);
  line(-s, +s, 0, 0 + h);
  line(0, 0 + h, 0 + s, 0 + s);
  line(0 + s, 0 + s, 0 + h, 0);
  line(0 + h, 0, 0 + s, 0 - s);
  line(0 + s, 0 - s, 0, 0 - h);
  line(0, 0 - h, 0 - s, 0 - s);
  line(0 - s, 0 - s, 0 - h, 0);
  line(0 - h, 0, 0 - s, 0 + s);
  angleMode(DEGREES);
  pop();
}
