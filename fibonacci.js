const  readline = require('readline');


const  reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  reader.question('Quantidade de números da sequência :' , num => {
      console.log(`Números pertinente a sequência os quais foram induzidos ao usuário se referem a: ${fibonacio(parseInt(num))}`);
  });

  function fibonacio (num) {

    let previous = 0
    let current = 1
    let next;
    let output = ' ';

    if (num === 1) output = previous;
    if (num === 2)  output = `${ previous}  ${ current} ` ;
    if (num > 2) {
        output = `${ previous}  ${ current} ` ;
        for(let i = 2 ; i < num ; i++) {
            next = previous + current;
            previous = current;
            current = next;

            output += `${current} `;
        }
    }
    return output;
}
