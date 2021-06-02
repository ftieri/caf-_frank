let canvas;
let h1;
let img;
let x = 0;
let speed = 3;
function preload() {
  img = loadImage('hat.png');
}
function setup() {
  canvas = createCanvas(650, 100);
 canvas.position(40, 80);
  h1 = createElement('h1', 'Café Frank 👿');
  h1.position(40, 70);
  h1.size(600, 100)
}

function draw() {
  background('black');
  fill(255, 0, 0);
  rect(400, 800, 100, 100);
image(img, x, 10, 80, 80);
  x = x + 1;
  if (x > 580){
    speed = -5;
  }
  if (x < 0){
    speed = 3;
}
  x = x + speed
}