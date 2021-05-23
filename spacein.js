let fff;
let baliciador;
let pant;
let vc;
let nal;
let mac;
let nan;
let al;



function setup() {
  createCanvas(800, 800);
  fff = 0;
  vc = true;
  baliciador = 0;
  pant = 0;

  mac = new nave();
  nal = new bullet(mac.x, mac.y);
  al = [];

}

function draw() {
  background(0);
  switch (pant) {
    case 0:
      background(255);
      textAlign(CENTER);
      fill(0);
      textSize(80);
      text("Space Invaders", 400, 300);
      rectMode(CENTER);
      fill(255);
      strokeWeight(20);
      rect(400, 500, 500, 200);
      fill(0);
      text("inicio", 400, 520);

      break;

    case 1:

      mac.pintar(this);

      switch (baliciador) {
        case 0:
          nal.nomover(mac.y, mac.x);
          break;
        case 1:

          nal.pintar(this);
          nal.mover();
          break;

        default:
          break;
      }

      if (nal.getY() <= -100) {
        baliciador = 0;
      }

      for (i = 0; i < al.length; i++) {

        let lom = al[i];

        lom.pintar(this);
        lom.mover();

        fff++;
        if (fff > 20) {
          vc = false;
        }

        if (lom.getY() > 750) {
          pant = 3;
        }

        if (baliciador == 1) {
          if (lom.getX() < nal.getX() + 70 && lom.getX() > nal.getX() - 70 && lom.getY() < nal.getY() + 70
            && lom.getY() > nal.getY() - 70) {
            al.splice(i,1);
            baliciador = 0;
          }

        }

        if (lom.getX() < mac.getX() + 50 && lom.getX() > mac.getX() - 50 && lom.getY() < mac.getY() + 50
          && lom.getY() > mac.getY() - 50) {
          pant = 3;

        }

      }

      for (i = 0; i < 40; i++) {
        if (vc == true) {
          let jaz = new aliens(100 * i, -100);
          al.push(jaz);

        }
      }
      if (al.length<= 0) {
        pant = 2;
      }

      break;
    case 2:
      background(0);
      textAlign(CENTER);
      fill(255);
      textSize(80);
      text("!Ganaste!", 400, 400);
      break;
    case 3:
      background(0);
      textAlign(CENTER);
      fill(255);
      textSize(80);
      text("Perdiste", 400, 400);
      break;
    default:
      break;
  }

}
function keyPressed() {

  mac.mover(key);



}

function mouseClicked() {
  // mac.dispara();
  baliciador = 1;
  if (pant == 0) {
    if (mouseX < 650 && mouseX > 150 && mouseY < 600 && mouseY > 400) {
      pant = 1;
    }
  }
}
