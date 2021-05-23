class nave {

	constructor (x, y){
		this.x = 400;
		this.y = 700;
	}

	pintar() {

		noStroke();
		rectMode(CENTER);

		fill(250,0,0);
		triangle(this.x, this.y - 10, this.x + 60, this.y + 40, this.x, this.y + 40);
		triangle(this.x, this.y - 10, this.x - 60, this.y + 40, this.x, this.y + 40);

		fill(255);
		rect(this.x, this.y, 20, 80);
		fill(0,250,50);
		triangle(this.x + 10, this.y - 40, this.x - 10, this.y - 40, this.x, this.y - 60);
		
		fill(0,200,255);
		ellipse(this.x, this.y, 16, 50);


		

		

	}

	 mover(tecla) {
		switch (tecla) {
		case 'w':
			this.y -= 30;
			break;
		case 'a':
			this.x -= 30;
			break;

		case 's':
			this.y += 30;
			break;

		case 'd':
			this.x += 30;
			break;

		default:
			break;
		}

		if (this.x > 800) {
			this.x = 0;
		}
		if (this.y > 800) {
			this.y = 800;
		}
		if (this.x < 0) {
			this.x = 800;
		}
		if (this.y < 0) {
			this.y = 0;
		}

	}



	getX() {
		return this.x;
	}

	getY() {
		return this.y;
	}


}
