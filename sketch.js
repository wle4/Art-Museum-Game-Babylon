let s = 'Art History';


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(500);
  
  text(s, windowWidth/2.5, windowHeight/2.2, 350, 500); 
    textFont('Georgia');
    textSize(50)
    textStyle(BOLD);
}
