class NeuralNetwork
{
  constructor(inodes, hnodes, onodes)
  {
    this.inodes = inodes;
    this.hnodes = hnodes;
    this.onodes = onodes;

    this.wih = new Matrix(this.hnodes, this.inodes);
    this.who = new Matrix(this.onodes, this.hnodes);
    this.wih.randomize();
    this.who.randomize();

    this.bh = new Matrix(this.hnodes, 1);
    this.bo = new Matrix(this.onodes, 1);
    this.bh.randomize();
    this.bo.randomize();
    this.fitness = 0;
  }

  predict(inputs)
  {
    let input = Matrix.toMatrix(inputs);

    let hr = Matrix.mproduct(this.wih, input);
  	hr.add(this.bh);
  	hr.map(sigmoid);

  	let oret = Matrix.mproduct(this.who, hr);
  	oret.add(this.bo);
  	oret.map(sigmoid);

  	let ret = Matrix.toArray(oret);

  	return ret;
  }
}

function sigmoid(x)
{
  return 1 / (1 + Math.exp(-x));
}
