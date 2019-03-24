let d;

function setup()
{
  createCanvas(500, 500);
  d = new Dino(100, 200, 50, 100, 0.5);
  fill(255);
  Cacty = new Cactus();
  fill(128);
}

function draw()
{
  background(0);
  d.update();
  d.show();
  Cacty.show();
	Cacty.update();
}

function mousePressed()
{
  d.jump();
}
