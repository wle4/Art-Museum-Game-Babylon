var bedX = 0;
var bedY = 0;
let s = 'This is a statue of Tutankhamun, also known as King Tut. His mummy was very well preserved, his tomb was discovered entirely. Many statues were made for the tombs of gods or kings, as this one was made for the king Tutankhamun';

function preload() {
  img = loadImage("11.png");
  base = loadImage("tut.jpg")
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
  rect(650, 160, 100, 100)
  fill(100); 
  fill(100,50); 
  fill(0,0,255);
  fill(0,0,255,50);
  
  {if (bedX > 650 && bedY > 160 && bedX < 700 && bedY < 210)
    background(base); }
   {if (bedX > 650 && bedY > 160 && bedX < 700 && bedY < 210)
    fill(240,248,255)
   {if (bedX > 650 && bedY > 160 && bedX < 700 && bedY < 210)
    text(s, windowWidth/5, windowHeight/1.5, 350, 500); 
    textFont('Georgia');
    textSize(15)
    textStyle(BOLD);
  }

   
  }

  
}
//https://www.britannica.com/biography/Tutankhamun
