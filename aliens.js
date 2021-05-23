class aliens {
	constructor (x, y, r, nig){
		this.x = x;
		this.y = y;
		this.r = 50;
		this.nig = 0;
	}

	pintar( ) {
		fill(0, 200, 200);
		rect(this.x, this.y - 10, 20, 10);
		rect(this.x, this.y + 14, 40, 40);
		rect(this.x + 25, this.y + 25, 10, 40);
		rect(this.x - 25, this.y + 25, 10, 40);
		fill(0,250,0);
		triangle(this.x+8, this.y+20, this.x+20, this.y+20, this.x+20, this.y);
		triangle(this.x-8, this.y+20, this.x-20, this.y+20, this.x-20, this.y);

	}

	 mover() {
		switch (this.nig) {
		case 0:
			this.x += 10;
			if (this.x > 750) {
				this.y += 60;
				this.nig = 1;
			}
			break;
		case 1:
			this.x -= 10;
			if (this.x < 50) {
				this.y += 60;
				this.nig = 0;
			}
			break;

		default:
			break;
		}
	}

	getX() {
		return this.x;
	}

	getY() {
		return this.y;
	}
}
