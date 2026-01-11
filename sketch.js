function setup() {
  createCanvas(400, 400);
  frameRate(10); //slow down the speed of the animation
}

function draw() {
  background(255, 80); //create a fade out effect for the animation
  
  for(let i = 0; i<50; i++){
    let r = random(5, 25);
    let x = random(400); //random x position
    let y = random(400); //random y position
    fill('#45d1fb');
    noStroke();

    //add a limitation to avoid dots drawing right under the message
    if (y < width/2 - 40 || y > width/2 + 40) {
      circle(x, y, r, r);
    }
  }
  
  //add the message
  fill(0);
  textAlign(CENTER, CENTER); //use the center of the text as the (x, y) position
  textSize(40);
  text('Is This Seat Taken?', width/2, height/2);
}
