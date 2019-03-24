class Cactus{
	
	constructor(posx, posy, speed){
		this.type = Math.floor(random(3));
		this.posx = posx;
		this.posy = posy;
		this.speed = speed;
		this.height = (this.type+5)/3*100;
		this.width = ((this.type+this.type/2)/(this.type/2+1)+1)*100;
	}
	
	collisionDetect(){
		if ((this.posx-this.width/2 <= dinosaur.posx+dinosaur.width/2) && (this.posy-this.height/2 <= dinosaur.posx+dinosaur.heigth/2)) return true;
		else return false;
	}
	
	goingForward(){
		this.posx -= this.speed;
	}
}
