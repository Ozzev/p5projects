class Palla
{
  constructor(posx, posy, dim, jumpF, gravity)
  {
    this.posx = posx;
    this.posy = posy;
    this.dim = dim; // DIMENSIONE X E Y
    this.jumpF = jumpF; // FORZA DEL SALTO
    this.gravity = gravity; // FORZA DI GRAVITA'


    this.Mposy = posy; // INIZIALE DI POSY
    this.acc = 0; // ACCELERAZIONE DELLA PALLA
    this.isJumping = false // STA SALTANDO?
  }

  show()
  {
    ellipse(this.posx, this.posy, this.dim, this.dim); // CREA IL CERCHIO
  }

  update()
  {
    this.posy += this.acc; // AGGIORNA LA POSIZIONE CON IL VALORE DELLA VELOCITA'
    if(this.isJumping) this.acc += this.gravity; // SE STA SALTANDO, DIMINUISCI GRADUALMENTE LA VELOCIT'
    if(this.posy > this.Mposy) // SE SEI SOTTO IL VALORE INIZIALE
    {
      this.acc = 0; // RIPRISTINA LA VELOCITA'
      this.posy = this.Mposy; // VAI AL VALORE INIZIALE (SICCOME POTRESTI ESSERE OLTRE)
      this.isJumping = false; // NON STAI PIU' SALTANDO
    }
  }

  jump()
  {
    this.acc -= this.jumpF; // TOGLI ALL'ACCELERAZIONE LA FORZA DATA DURANTE IL SALTO (SICCOME ACC VERSO L'ALTO E' NEGATIVA (POSY--))
    this.isJumping = true; // STAI SALTANDO
  }
}
