var bedX = 0;
var bedY = 0;
let s = 'Roy Lichtenstein is another famous contemporary artist. This is pop-art, which is more popularized today. With the high saturation of colors and different techniques, these are different than traditional paintings. Stipple art is used.';

function preload() {
  img = loadImage("17.png");
  base = loadImage("lichen.png")
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
  rect(700, 190, 100, 100)
  fill(100); 
  fill(100,50); 
  fill(0,0,255);
  fill(0,0,255,50);
  
  {if (bedX > 700 && bedY > 190 && bedX < 750 && bedY < 240)
    background(base);}
  {if (bedX > 700 && bedY > 190 && bedX < 750 && bedY < 240)
    fill(500)
  {if (bedX > 700 && bedY > 190 && bedX < 750 && bedY < 240)
    text(s, 20, 300, 350, 600); 
    textFont('Georgia');
    textSize(15)
    textStyle(BOLD);
  }

   
  }

  
}
//https://www.guyhepner.com/product/crying-girl-roy-lichtenstein/
