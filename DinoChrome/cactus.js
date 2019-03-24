class Cactus{
	
	constructor(){
		this.type = random(3);
		this.height = (this.type+5)/3*100;
		this.width = ((this.type+this.type/2)/(this.type/2+1)+1)*100;
		this.posx = 100;
		this.posy = 100;
		this.collision=false;
	}
	
	collisionDetect(){
		if ((this.posx-this.width/2 <= dinosaur.posx+dinosaur.width/2) && (this.posy-this.height/2 <= dinosaur.posx+dinosaur.heigth/2)) this.collision=true;
	}
	
	goingForward(){
		this.posx-=1;
	}
}
