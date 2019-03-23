class Box
{
  constructor(pos, dim, peso, v, con)
  {
    this.pos = pos;
    this.dim = dim;
    this.peso = peso;
    this.v = v
    this.con = con;
  }

  show()
  {
    const x = constrain(this.pos, this.con, width)
    rect(x, 400 - this.dim, this.dim, this.dim);
  }

  update()
  {
    this.pos += this.v;
  }

  collide(other) {
    return !(this.pos + this.dim < other.pos ||
      this.pos > other.pos + other.dim);
  }

  bounce(other) {
    let sumM = this.peso + other.peso;
    let newV = (this.peso - other.peso) / sumM * this.v;
    newV += (2 * other.peso / sumM) * other.v;
    return newV;
  }
}
