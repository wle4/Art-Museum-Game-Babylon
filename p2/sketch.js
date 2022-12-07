var bedX = 0;
var bedY = 0;
let s = 'Located in the southern part of Argentina, these paintings were created from 9,000-13,000 years ago. Natural paint was used from iron and various other minerals.';

function preload() {
  img = loadImage("10.png");
  base = loadImage("caveman..jpg")
}

function mouseDragged() {
  if ((mouseX > bedX - 200) && (mouseX < bedX + 200)) {
  if ((mouseY > bedY - 200) && (mouseY < bedY + 200)) {
      bedX = mouseX-80;
      bedY = mouseY-80
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(190);

  image(img, bedX, bedY, 100, 100);
  rect(300, 200, 100, 100)
  fill(100); 
  fill(100,50); 
  fill(0,0,255);
  fill(0,0,255,50);
  
  {if (bedX > 250 && bedY > 150 && bedX < 350 && bedY < 250)
    background(base); }
   {if (bedX > 250 && bedY > 150 && bedX < 350 && bedY < 250)
    fill(240,248,255)
   {if (bedX > 250 && bedY > 150 && bedX < 350 && bedY < 250)
    text(s, windowWidth/5, windowHeight/1.5, 350, 500); 
    textFont('Georgia');
    textSize(15)
    textStyle(BOLD);
  }

   
  }

  
}

//https://www.heritagedaily.com/2020/03/10-prehistoric-cave-paintings/126971
