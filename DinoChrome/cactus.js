class Cactus{
	
	constructor(){
		this.type = random(3);
		this.height = (this.type+5)/3*20;
		this.width = ((this.type+this.type/2)/(this.type/2+1)+1)*20;
		this.posx = 600;
		this.posy = 200-this.height;
		this.collision=false;
	}
	
	show(){
    		rect(this.posx, this.posy, this.height, this.width);
  	}
	
	collisionDetect(){
		if ((this.posx <= Dino.posx+Dino.width) && (this.posy <= Dino.posx+Dino.heigth)) this.collision=true;
	}
	
	update(){
		this.posx-=Dino.acc;
	}
}
