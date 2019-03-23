class NeuroEvolution
{
  constructor(num, inodes, hnodes, onodes)
  {
    this.nns = [];
    for(let i = 0; i < num; i++)
    {
      this.nns[i] = new NeuralNetwork(inodes, hnodes, onodes);
    }
  }

  evolve()
  {
    let t = 0;
    for(let i = 1; i < this.nns.length; i++)
    {
      if(this.nns[i].fitness > this.nns[t].fitness) t = i;
    }

    for(let i = 0; i < this.nns.length; i++)
    {
      if(i != t)  this.nns[i] = this.nns[t];
    }    

    for(let i = 0; i < this.nns.length; i++)
    {
      this.nns[i].wih.map(mutate);
      this.nns[i].who.map(mutate);
      this.nns[i].bh.map(mutate);
      this.nns[i].bo.map(mutate);
    }
  }
}

function mutate(x) {
  if (random(1) < 0.1) {
    let offset = randomGaussian() * 0.5;
    let newx = x + offset;
    return newx;
  } else {
    return x;
  }
}
