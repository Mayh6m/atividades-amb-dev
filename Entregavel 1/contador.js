let readline = require('readline');

let reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question('Insira um valor: ', (num) => {
  console.log(`Existe ${num} números entre 1 e ${num}  `);
}); 