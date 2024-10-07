function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); 
}

function draw() {
  background(15,131,50);
  let num_cir = 20;
  let x_step = width / 3 / num_cir;

  for(let i = 0; i < num_cir; i++) {
    let x_1 = i * x_step;
    let r;
    if (i === Math.floor(num_cir / 2)) {
      r = 30;
    } else if (i < Math.floor(num_cir / 2)) {
      r = map(i, 0, Math.floor(num_cir / 2) - 1, 2, 25);
    } else {
      r = map(i, Math.floor(num_cir / 2) + 1, num_cir - 1, 25, 2);
    }
    draw_circle(x_1, r);
  }

  for(let i = 0; i < num_cir; i++) {
    let x_2 = width / 3 + i * x_step;
    let r;
    if (i === Math.floor(num_cir / 2)) {
      r = 30;
    } else if (i < Math.floor(num_cir / 2)) {
      r = map(i, 0, Math.floor(num_cir / 2) - 1, 2, 25);
    } else {
      r = map(i, Math.floor(num_cir / 2) + 1, num_cir - 1, 25, 2);
    }
    draw_circle(x_2, r);
  }

  for(let i = 0; i < num_cir; i++) {
    let x_3 = 2 * width / 3 + i * x_step;
    let r;
    if (i === Math.floor(num_cir / 2)) {
      r = 30;
    } else if (i < Math.floor(num_cir / 2)) {
      r = map(i, 0, Math.floor(num_cir / 2) - 1, 2, 25);
    } else {
      r = map(i, Math.floor(num_cir / 2) + 1, num_cir - 1, 25, 2);
    }
    draw_circle(x_3, r);
  }
}

function draw_circle(x, r) {
  for (let y = -r; y < height; y += r * 1.05) {
    push(); 
    translate(x, y); 
    noStroke(); 
    fill(251, 242, 183); 
    ellipse(0, 0, r); 
    pop();
  }
}
