let x = 100
let y = 50
  
function setup() {
  createCanvas(450, 450);
}

function draw() {
  background(255);
  fill(255, 255, 0);
  noStroke();
  arc(x, y, 80, 80, 95, 200, PIE);

  if(keyIsPressed){
    if(keyCode == UP_ARROW){
    } else if (keyCode == UP_ARROW){
      y--;
      
    } else if (keyCode == DOWN_ARROW){
      y++;
      
    } else if (keyCode == LEFT_ARROW){
      x--;
      
    } else if (keyCode == RIGHT_ARROW){
      x++;
      
    }
  }

}
