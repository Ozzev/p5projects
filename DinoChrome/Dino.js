class Dino
{
  constructor(posx, posy, dimx, dimy, gravity)
  {
    this.posx = posx;
    this.posy = posy;
    this.dimx = dimx;
    this.dimy = dimy;

    this.baseY = posy;
    this.acc = 0;
    this.gravity = gravity;
    this.inJumping = false;
  }

  show()
  {
    rect(this.posx, this.posy, this.dimx, this.dimy);
  }

  update()
  {
    if(this.isJumping)
    {
      this.posy += this.acc;
      this.acc += this.gravity;
    }
    if(this.posy > this.baseY)
    {
      this.isJumping = false;
      this.posy = this.baseY;
    }
  }

  jump()
  {
    if(!this.isJumping)
    {
      this.acc = -10;
      this.isJumping = true;
    }
  }
}
