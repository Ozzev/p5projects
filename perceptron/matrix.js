class Matrix{
  constructor(rows, cols)
  {
    this.rows = rows;
    this.cols = cols;
    this.data = [];

    for(let i = 0; i < this.rows; i++)
    {
      this.data[i] = [];
    }
    this.set(0);

  }

  set(num)
  {
    for(let i = 0; i < this.rows; i++)
    {
      for(let j = 0; j < this.cols; j++)
      {
        this.data[i][j] = num;
      }
    }
  }

  add(num)
  {
    if(num instanceof Matrix)
    {
      let r, c;
      if(this.rows < num.rows) r = this.rows;
      else r = num.rows;
      if(this.cols < num.cols) c = this.cols;
      else c = num.cols;

      for(let i = 0; i < r; i++)
      {
        for(let j = 0; j < c; j++)
        {
          this.data[i][j] += num.data[i][j];
        }
      }

    }
    else{
      for(let i = 0; i < this.rows; i++)
      {
        for(let j = 0; j < this.cols; j++)
        {
          this.data[i][j] += num;
        }
      }
    }
  }

  multiply(num)
  {
    for(let i = 0; i < this.rows; i++)
    {
      for(let j = 0; j < this.cols; j++)
      {
        this.data[i][j] *= num;
      }
    }
  }

  static mproduct(a, b)
  {
    if(b.rows == a.cols)
    {
      let ris = new Matrix(a.rows, b.cols);

  		for (let i = 0; i < a.rows; i++)
  		{
  			for (let j = 0; j < b.cols; j++)
  			{
  				let sum = 0;
  				for (let k = 0; k < a.cols; k++)
  				{
  					sum += a.data[i][k] * b.data[k][j];
  				}
  				ris.data[i][j] = sum;
  			}
  		}
  		return ris;
    }
  }

  randomize()
  {
    for(let i = 0; i < this.rows; i++)
    {
      for(let j = 0; j < this.cols; j++)
      {
        this.data[i][j] = Math.random() * 2 - 1;
      }
    }
  }

  transpose()
  {
    let ris = new Matrix(this.cols, this.rows);
    for (let i = 0; i < this.rows; i++)
  	{
  		for (let j = 0; j < this.cols; j++)
  		{
  			ris.data[j][i] = this.data[i][j];
  		}
  	}
  	return ris;
  }

  print()
  {
    console.table(this.data);
  }

  static toMatrix(input)
  {
  	let t = new Matrix(input.length, 1);
  	for (let i = 0; i < input.length; i++)
  	{
  		t.data[i][0] = input[i];
  	}
  	return t;
  }

  static toArray(t)
  {
    let arr;
  	arr = [];
  	for (let i = 0; i < t.rows; i++)
  	{
  		arr[i] = t.data[i][0];
  	}
  	return arr;
  }

  map(funct)
  {
    for(let i = 0; i < this.rows; i++)
    {
      for(let j = 0; j < this.cols; j++)
      {
        this.data[i][j] = funct(this.data[i][j]);
      }
    }
  }

//NON SONO SICURO. GUARDA CODING TRAIN xd
  mutate(f)
  {
  	for (let i = 0; i < this.rows; i++)
  	{
  		for (let j = 0; j < this.cols; j++)
  		{
  			if (Math.random() < f)
  				this.data[i][j] = Math.random() * 2 - 1;
  		}
  	}
  }

}
