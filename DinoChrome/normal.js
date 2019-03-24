let d;

function setup()
{
  createCanvas(500, 500);
  d = new Dino(100, 200, 50, 100, 0.5);
  fill(255);
}

function draw()
{
  background(0);
  d.update();
  d.show();
}

function mousePressed()
{
  d.jump();
}
