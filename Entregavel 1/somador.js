let rl = require('readline');

let reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.question('Insira  (número, número) : ', entrada => {
  let aux = a(entrada).reduce((soma, elemento) => soma += elemento);

  console.log(aux);
});

const a = str => str.split(',').map(num => parseFloat(num));