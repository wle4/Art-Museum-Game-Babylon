var bedX = 0;
var bedY = 0;
let s = 'This painting represents urbanization in todays society in America. This image was actually represented New York, and depicts the loneliness of urbanization.';

function preload() {
  img = loadImage("15.png");
  base = loadImage("chicago.jpg")
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
  rect(620, 200, 100, 100)
  fill(100); 
  fill(100,50); 
  fill(0,0,255);
  fill(0,0,255,50);
  
  {if (bedX > 600 && bedY > 200 && bedX < 650 && bedY < 250)
    background(base);}
  {if (bedX > 600 && bedY > 200 && bedX < 650 && bedY < 250)
    fill(240,248,255)
  {if (bedX > 600 && bedY > 200 && bedX < 650 && bedY < 250)
    text(s, 20, 300, 350, 600); 
    textFont('Georgia');
    textSize(15)
    textStyle(BOLD);
  }

   
  }

  
}
//https://www.artic.edu/artworks/111628/nighthawks
