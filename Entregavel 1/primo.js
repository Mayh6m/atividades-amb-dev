const  readline = require('readline');


const  reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
 reader.question('Insira um número ', function(num){
    console.log(primo(parseInt(num)) === true ? 'é primo' : 'não é');
});
function primo(num){

    for(let i = 2; i < num; i++) {
        let aux = num % i;
    
        if(aux === 0) return false;
    }
    
    return num > 1;
}
