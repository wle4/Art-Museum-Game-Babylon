var bedX = 0;
var bedY = 0;
let s = 'This famous piece by Monet demostrates how up-close, the strokes of the painting look messy and do not make sense. However, from afar, a bridge can be seen above a pond of lillies.';

function preload() {
  img = loadImage("14.png");
  base = loadImage("lilly.jpg")
}

function mouseDragged() {
  if ((mouseX > bedX - 200) && (mouseX < bedX + 200)) {
  if ((mouseY > bedY - 200) && (mouseY < bedY + 200)) {
      bedX = mouseX-40;
      bedY = mouseY-40
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(190);

  image(img, bedX, bedY, 150, 150);
  rect(400, 250, 100, 100)
  fill(100); 
  fill(100,50); 
  fill(0,0,255);
  fill(0,0,255,50);
  
  {if (bedX > 400 && bedY > 250 && bedX < 450 && bedY < 300)
    background(base);}
  {if (bedX > 400 && bedY > 250 && bedX < 450 && bedY < 300)
    fill(240,248,255)
  {if (bedX > 400 && bedY > 250 && bedX < 450 && bedY < 300)
    text(s, 20, 300, 350, 600); 
    textFont('Georgia');
    textSize(15)
    textStyle(BOLD);
  }

   
  }

  
}
//https://www.claude-monet.com/the-water-lily-pond.jsp
