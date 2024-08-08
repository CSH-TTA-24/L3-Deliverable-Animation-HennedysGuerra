let yPos = 25;

function setup() {
  createCanvas(500, 500);
  background(0);
  let r = random(0,255)
  let g = random(0,255)
  let b = random(0,255)
 fill (r,g,b)
}

function mouseClicked() {
  createCanvas(500,500);
  background(0);
  yPos = 0 
  let r = random(0,255)
    let g = random(0,255)
    let b = random(0,255)
   fill (r,g,b)
}

function draw() {
  background(0,20);

  ellipse(250, yPos, 50, 50);

  yPos+=6

  if (yPos > 525) {
    yPos = -25
  }
}