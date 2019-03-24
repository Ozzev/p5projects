class ActivationFunction {
  constructor(func, dfunc) {
    this.func = func;
    this.dfunc = dfunc;
  }
}

let sigmoid = new ActivationFunction(
  x => 1 / (1 + Math.exp(-x)),
  y => y * (1 - y)
);

let tanh = new ActivationFunction(
  x => Math.tanh(x),
  y => 1 - (y * y)
);

function mutate(x) {
  if (random(1) < 0.1) {
    let offset = randomGaussian() * 0.5;
    let newx = x + offset;
    return newx;
  } else {
    return x;
  }
}

class ImprovedNN
{
  constructor(in_nodes, out_nodes)
  {
    this.input_nodes = in_nodes;
    this.output_nodes = out_nodes;
    this.weights_ih;
    this.weights_ho;
    this.bias_o;

    // NEW
    this.hiddens = [];
    this.weights_hh = [];
    this.bias_h = [];
  }

  setHNodes(layer, nodes)
  {
    this.hiddens[layer] = nodes;
  }

  create()
  {
    // WEIGHTS IN
    this.weights_ih = new Matrix(this.hiddens[0], this.input_nodes);
    this.weights_ih.randomize();


    // WEIGHTS HH
    for(let i = 1; i < this.hiddens.length - 1; i++)
    {
      this.weights_hh[i - 1] = new Matrix(this.hiddens[i], this.hiddens[i - 1]);
      this.weights_hh[i - 1].randomize();
    }

    // WEIGHTS OUT
    this.weights_ho = new Matrix(this.hiddens[this.hiddens.length - 1], this.input_nodes);
    this.weights_ho.randomize();


    // BIAS HH
    for(let i = 0; i < this.hiddens.length; i++)
    {
      this.bias_h[i] = new Matrix(this.hiddens[i], 1);
      this.bias_h[i].randomize();
    }

    // BIAS O
    this.bias_o = new Matrix(this.output_nodes, 1);
    this.bias_o.randomize();
  }

  predict(input_array) {

    // Generating the Hidden Outputs
    let inputs = Matrix.fromArray(input_array);

    let hidden = [];
    hidden[0] = Matrix.multiply(this.weights_ih, inputs);
    hidden[0].add(this.bias_h[0]);
    hidden[0].map(this.activation_function.func);

    for(let i = 1; i < this.hiddens.length; i++)
    {
      hidden[i] = Matrix.multiply(this.weights_hh[i - 1], hidden[i - 1]);
      hidden[i].add(this.bias_h[i]);
      hidden[i].map(this.activation_function.func);
    }

    // Generating the output's output!
    let output = Matrix.multiply(this.weights_ho, hidden[hidden.length - 1]);
    output.add(this.bias_o);
    output.map(this.activation_function.func);

    // Sending back to the caller!
    return output.toArray();
  }

  setLearningRate(learning_rate = 0.1) {
    this.learning_rate = learning_rate;
  }

  setActivationFunction(func = sigmoid) {
    this.activation_function = func;
  }

  mutate(func = mutate) {
    this.weights_ih.map(func);

    for(let i = 0; i < this.weights_hh.length; i++)
    {
      this.weights_hh[i].map(func);
    }

    this.weights_ho.map(func);

    for(let i = 0; i < this.bias_h.length; i++)
    {
      this.bias_h[i].map(func);
    }

    this.bias_o.map(func);
  }
}
