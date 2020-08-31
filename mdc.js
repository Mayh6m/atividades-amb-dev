  
let readline = require('readline');

let n1 = '';
let n2 = '';

let reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question('Insira os valores  (valor,valor) ',(input) => {
    let aux = toArray(input);
    n1 = aux[0];
    n2 = aux[1];

    console.log(`MDC = ${mdc(n1, n2)}`);
  }
);

const toArray = (str) => str.split(',').map((num) => parseInt(num));

const mdc = (n1, n2) => {
  let teto = n1 <= n2 ? n1 : n2;

  for (teto; teto >= 1; teto--) {
    let resto1 = n1 % teto;
    let resto2 = n2 % teto;

    if (resto1 === 0 && resto2 === 0) return teto;
  }
};
