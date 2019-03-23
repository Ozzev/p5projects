let p;

function setup()
{
  createCanvas(500, 500); // CREA L'AREA
  p = new Palla(width / 2, height - 50 / 2, 50, 15, 0.5); // CREA LA PALLA
}

function draw()
{
  background(0); //
  fill(255);     // SETTAGGI DI BASE
  noStroke();    //

  p.update(); // AGGIORNA LA PALLA
  p.show(); // MOSTRA LA PALLA

}

function mousePressed() // SE IL MOUSE E' PREMUTO
{
  p.jump(); // SALTA
}
