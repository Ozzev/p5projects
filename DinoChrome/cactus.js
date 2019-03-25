class Cactus{

	constructor(speed){

		this.type = Math.floor(Math.random() * 3);

		switch(this.type)
		{
			case 0:
				this.dimy = 25;
				this.dimx = 25;
				break;
			case 1:
				this.dimy = 50;
				this.dimx = 25;
				break;
			case 2:
				this.dimy = 25;
				this.dimx = 75;
				break;
		}

		this.posx = width;
		this.posy = height - 250 - this.dimy;

		this.speed = speed;
	}

	intersect(posx, posy, dimx, dimy)
  {
    if(this.posx < posx + dimx && this.posx + this.dimx > posx
    && this.posy < posy + dimy && this.posy + this.dimy > posy)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

	show()
	{
    rect(this.posx, this.posy, this.dimx, this.dimy);
  }

	/*collisionDetect(){
		if ((this.posx <= ) && (this.posy <= )) this.collision=true;
	}*/

	update()
	{
		this.posx -= this.speed;
	}
}
