var img;
var fe;
var le;
var re;
var sm;
var om;
var mm;
function preload() {

  img = loadImage('pumpkin.jpg');

  fe = loadImage('front.png');

  sm = loadImage('mouth.png');

  le = loadImage('left.png');

  re = loadImage('right.png');

  om= loadImage('mouth2.png');
  mm=loadImage('mouth3.png');

}

function setup() {

  createCanvas(570,451);

 frameRate(1);

}

function draw() {
 image(img, 0, 0);
  image(fe,142,150,100,68);

    image(fe,300,150,100,68);
    image(mm,162,218);

   
}

function keyPressed(){

  if(keyCode===LEFT_ARROW){

    image(le,142,150,100,68);

    image(le,300,150,100,68);

    image(sm,140,220);
    
  }

  if(keyCode===RIGHT_ARROW){

    

    image(re,142,150,100,68);

    image(re,300,150,100,68);

    image(om,160,215);
     
  }
  

}