let d = [];
let Cacty = [];
let wait;
let loops = 0;
let allTimeBest;
let best;
let speedSlider;
let divThisBestScore;
let divAllBestScore;
let thisBestScore;
let allBestScore;

const CACTUS_SPEED = 8;
const MAX_WAIT = 200;
const MIN_WAIT = 100;
const POPULATION = 100;


function setup()
{
  createCanvas(800, 500);

  speedSlider = createSlider(1, 10, 1, 3);
  divThisBestScore = createDiv();
  divAllBestScore = createDiv();


  for(let i = 0; i < POPULATION; i++)
  {
    d[i] = new Dino();
  }
  allTimeBest = d[0];
  allBestScore = d[0].fitness;

  Cacty[0] = new Cactus(CACTUS_SPEED);

  wait = Math.floor(Math.random() * MIN_WAIT);
  wait = constrain(wait, MIN_WAIT, MAX_WAIT);

  noStroke();
}

function restart()
{
  loops = 0;
  Cacty = [];
  Cacty[0] = new Cactus(CACTUS_SPEED);

  wait = Math.floor(Math.random() * MIN_WAIT);
  wait = constrain(wait, MIN_WAIT, MAX_WAIT);

  best = 0;
  for(let i = 1; i < POPULATION; i++)
  {
    if(d[i].fitness > d[best].fitness) best = i;
  }

  if(d[best].fitness > allTimeBest.fitness) allTimeBest = d[best];

  for(let i = 0; i < POPULATION; i++)
  {
    d[i] = new Dino(d[best].copy());
  }

  draw();
}

function draw()
{
  background(0);

  for(let speedSlid = 0; speedSlid < speedSlider.value(); speedSlid++)
  {
    if(loops == wait)
    {
      Cacty.push(new Cactus(CACTUS_SPEED));
      wait = Math.floor(Math.random() * MAX_WAIT);
      wait = constrain(wait, MIN_WAIT, MAX_WAIT);
      loops = 0;
    }
    loops++;

    if(Cacty.length > 0 && Cacty[0].posx + Cacty[0].dimx < 0)
    {
      Cacty.shift();
    }

    for(let i = 0; i < Cacty.length; i++)
    {
      for(let j = 0; j < POPULATION; j++)
      {
        if(Cacty[i].intersect(d[j].posx, d[j].posy, d[j].dimx, d[j].dimy))
        {
          d[j].die = 1;
        }
      }
    }

    // DINO THINK
    for(let i = 0; i < POPULATION; i++)
    {
      for(let j = 0; j < Cacty.length; j++)
      {
        if(Cacty[j].posx + Cacty[j].dimx < d[i].posx) continue;
        else
        {
          let input = [];
          input.push(Cacty[j].posx - d[i].posx);
          input.push(Cacty[j].dimx);
          input.push(Cacty[j].dimy);

          let output = d[i].think(input);
          if(output[0] > 0.5) d[i].bigJump();
          else if(output[1] > 0.5) d[i].smallJump();
          break;
        }
      }
    }

    for(let i = 0; i < Cacty.length; i++)
    {
      Cacty[i].update();
    }

    for(let j = 0; j < POPULATION; j++)
    {
      if(!d[j].die)
      {
        d[j].update();
        thisBestScore = d[j].fitness;
        if(d[j].fitness > allBestScore) allBestScore = d[j].fitness;
      }
    }

    let allDie = 1;
    for(let j = 0; j < POPULATION; j++)
    {
      if(d[j].die == 0) allDie = 0;
    }

    if(allDie) restart();
  }

  // FLOOR
  fill(240, 194, 40);
  rect(0, 250, width, height - 250);

  // CACTUS
  fill(0, 180, 0);
  for(let i = 0; i < Cacty.length; i++)
  {
    Cacty[i].show();
  }

  // DINO
  fill(255, 255, 255, 40);
  for(let j = 0; j < POPULATION; j++)
  {
    if(!d[j].die)
    {
      d[j].update();
      d[j].show();
    }
  }

  divThisBestScore.html("This run best score: " + thisBestScore);
  divAllBestScore.html("All time best score: " + allBestScore);
}

function keyPressed()
{
  if(key == 'a') d.smallJump();
  if(key == 's') d.bigJump();
}
