function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
}

function draw() {


  for (let i = 0; i < 20; i++) {  
    let xStart = random(width); 
    let yStart = 0;
    let band_W;
    let band_H;
    band_W = random(1, 100);
    band_H = random(height / 4, height + 200);
    
    if (xStart < width / 2) {
      xStart = width / 2;
    }

    fill(random(100, 255), random(125), random(55));
    noStroke();

    quad(xStart, yStart, xStart - band_W, yStart + band_H, xStart, yStart + band_H, xStart + band_W, yStart);

  }
}
