var bedX = 0;
var bedY = 0;
let s = 'Raphael, a famous Renaissance painter, demonstrates skill in this painting. During the Middle Ages, perspective was often not as defined as the Renaissance. The Renaissance era proved they could develop more complex art skills, and developed new techniques using visual rays to make images seem close/far';

function preload() {
  img = loadImage("13.png");
  base = loadImage("renaissance.jpg")
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
  rect(550, 130, 100, 100)
  fill(100); 
  fill(100,50); 
  fill(0,0,255);
  fill(0,0,255,50);
  
  {if (bedX > 550 && bedY > 130 && bedX < 600 && bedY < 180)
    background(0);}
  {if (bedX > 550 && bedY > 130 && bedX < 600 && bedY < 180)
    image(base,windowWidth/4, 0, windowWidth/2, windowHeight) }
  {if (bedX > 550 && bedY > 130 && bedX < 600 && bedY < 180)
    fill(240,248,255)
  {if (bedX > 550 && bedY > 130 && bedX < 600 && bedY < 180)
    text(s, 20, 300, 280, 600); 
    textFont('Georgia');
    textSize(15)
    textStyle(BOLD);
  }

   
  }

  
}
//https://www.dailyartmagazine.com/the-marriage-of-the-virgin/
