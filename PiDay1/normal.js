let b1, b2;
let count = 0;
let countDiv;
let digits = 6;
let clack;
let timestep = 1000000;
let clackc = false;
let f = 0;

function preload()
{
  clack = loadSound('clack.wav');
}

function setup()
{
  b1 = new Box(150, 25, 1, 0, 100);
  b2 = new Box(200, 100, pow(100, digits - 1), -2 / timestep, 100 + 25);
  createCanvas(700, 500);
  noStroke();
  countDiv = createDiv(count);
  countDiv.style('font-size', '72pt');
}

function draw()
{
  for(let i = 0; i < timestep; i++)
  {
    if(b1.collide(b2))
    {
      const v1 = b1.bounce(b2);
      const v2 = b2.bounce(b1);
      b1.v = v1;
      b2.v = v2;
      count++;
      clackc = true;
    }
    if(b1.pos <= 100)
    {
      b1.v *= -1;
      count++;
      clackc = true;
    }
    b1.update();
    b2.update();
  }

  if(clackc)
  {
    clackc = false;
    clack.play();
  }

  f++;
  background(0);
  fill(0, 0, 128);
  rect(0, 400, width, 100);
  rect(0, 0, 100, height);
  fill(255, 0, 0);
  b1.show();
  b2.show();
  countDiv.html(nf(count, digits));
  if(f % 100 == 0)print(f);

  if(f == 250)
  {
    count = 0;
    removeElements();
    f = 0;
    digits+=1;
    if(digits == 9) digits = 1;
    setup();
  }
}
