var bedX = 0;
var bedY = 0;
let s = 'Warhol, a famous contemporary artist, made this to signify the mass-production of products. He made it to represent almost like a grocery store shelf, to demonstrate todays life of mass consumption and production';

function preload() {
  img = loadImage("16.png");
  base = loadImage("warhol.jpg")
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
  rect(220, 190, 100, 100)
  fill(100); 
  fill(100,50); 
  fill(0,0,255);
  fill(0,0,255,50);
  
  {if (bedX > 220 && bedY > 190 && bedX < 270 && bedY < 240)
    background(base);}
  {if (bedX > 220 && bedY > 190 && bedX < 270 && bedY < 240)
    fill(0)
  {if (bedX > 220 && bedY > 190 && bedX < 270 && bedY < 240)
    text(s, 20, 300, 350, 600); 
    textFont('Georgia');
    textSize(15)
    textStyle(BOLD);
  }

   
  }

  
}
//https://origins.osu.edu/milestones/november-2012-andy-warhol-s-campbell-s-soup-cans-1962?language_content_entity=en
