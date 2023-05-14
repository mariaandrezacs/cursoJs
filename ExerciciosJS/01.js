// Crie um programa que leia 6 valores. Você poderá receber valores negativos 
// e/ou positivos como entrada, devendo desconsiderar os valores nulos. Em seguida, 
// apresente a quantidade de valores positivos digitados.

// Você receberá seis valores, negativos e/ou positivos.

// Exiba uma mensagem dizendo quantos valores positivos foram lidos assim como é 
// exibido abaixo no exemplo de saída. Não esqueça da mensagem "valores positivos" ao final.



let n1 = parseInt(gets());
let n2 = parseInt(gets());
let n3 = parseInt(gets());
let n4 = parseInt(gets());
let n5 = parseInt(gets());
let n6 = parseInt(gets());
let positivo=0;
if (n1>0){
  positivo++
}
if (n2>0){
  positivo++
}
if (n3>0){
  positivo++
}
if (n4>0){
  positivo++
}
if (n5>0){
  positivo++
}
if (n6>0){
  positivo++
}

console.log(positivo+ " valores positivos");