class Dino
{
  constructor(brain)
  {
    this.posx = 100;
    this.posy = 200;
    this.dimx = 25;
    this.dimy = 50;
    this.fitness = 0;

    this.baseY = this.posy;
    this.acc = 0;
    this.gravity = 0.75;
    this.inJumping = false;

    this.die = 0;

    if(brain instanceof ImprovedNN)
    {
      this.brain = brain;
      this.brain.mutate();
    }
    else
    {
      this.brain = new ImprovedNN(3, 2);
      this.brain.setHNodes(0, 8);
      this.brain.create();
    }
  }

  think(input)
  {
    let output = this.brain.predict(input);
    return output;
  }

  copy()
  {
    return new Dino(this.brain);
  }

  show()
  {
    rect(this.posx, this.posy, this.dimx, this.dimy);
  }

  update()
  {
    this.fitness++;
    this.posy += this.acc;
    this.acc += this.gravity;

    if(this.posy > this.baseY)
    {
      this.isJumping = false;
      this.posy = this.baseY;
      this.acc = 0;
    }
  }

  smallJump()
  {
    if(!this.isJumping)
    {
      this.acc -= 10;
      this.isJumping = true;
    }
  }

  bigJump()
  {
    if(!this.isJumping)
    {
      this.acc -= 14;
      this.isJumping = true;
    }
  }
}
