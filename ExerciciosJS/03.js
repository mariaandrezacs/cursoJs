// Você deve fazer a leitura de 5 valores inteiros. Em seguida mostre 
// quantos valores informados são pares, quantos valores informados são ímpares, 
// quantos valores informados são positivos e quantos valores informados são negativos.

// Você receberá 5 valores inteiros.

// Exiba a mensagem conforme o exemplo de saída abaixo, sendo uma mensagem 
// por linha e não esquecendo o final de linha após cada uma.

let numbers = [gets(), gets(), gets(), gets(), gets()];
let pares = 0;
let impares = 0;
let positivos = 0;
let negativo = 0;


numbers.forEach(number => {
    if (number % 2 === 0) {
      pares++;
    }
    
    if(number % 2 !== 0){
      impares++;
    }
    
    if (number > 0) {
      positivos++;
    }

    if(number < 0){
      negativo++;
    }
})

console.log(pares + " valor(es) par(es)");
console.log(impares +  " valor(es) impar(es)");
console.log(positivos + " valor(es) positivo(s)");
console.log(negativo  + " valor(es) negativo(s)");