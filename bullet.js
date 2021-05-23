
 class bullet {
	constructor (x, y){
		this.x = x;
		this.y = y;

	}
	

	pintar() {

		rectMode(CENTER);
		fill(250,0,0);

		rect(this.x, this.y, 20, 40);
	
		fill(250,0,0);
		rect(this.x, this.y, 14, 34);

	}
	
	nopintar() {



	}

	mover() {
		this.y -= 40;
	}
	
	nomover(inxu, exu) {
		this.y = inxu;
		this.x=exu;
	}

	getX() {
		return this.x;
	}

	getY() {
		return this.y;
	}
}
