function setup() {
  createCanvas(400, 400);
  frameRate(10);
}

function draw() {
  background(255, 80);
  
  for(let i = 0; i<50; i++){
    let r = random(5, 25);
    let x = random(400);
    let y = random(400);
    fill('#45d1fb');
    noStroke();
    if (y < width/2 - 40 || y > width/2 + 40) {
      circle(random(400), y, r, r);
    }
    
  }
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(40);
  text('Is This Seat Taken?', width/2, height/2);
}
