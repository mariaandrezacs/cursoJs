// Desafio
// Precisamos saber quanto uma determinada empresa deve pagar para seus colaboradores, 
// porém temos apenas a quantidade de horas trabalhadas e o valor hora. Escreva um programa 
// que leia o número de um colaborador, seu número de horas trabalhadas, o valor que recebe 
// por hora e calcula o salário desse colaborador. Em seguida, apresente o número e o salário 
// do colaborador, com duas casas decimais.

// Entrada
// Você receverá 2 números inteiros e 1 número com duas casas decimais, representando o número,
// quantidade de horas trabalhadas e o valor que o funcionário recebe por hora trabalhada.

// Saída
// Exiba o número e o salário do colaborador, conforme exemplo abaixo, com um espaço em branco 
// antes e depois da igualdade. No caso do salário, também deve haver um espaço em branco após o $.

let num1 = gets().split(" ");
let num2 = gets().split(" ");
let num3 = gets().split(" ");
let number = parseInt(num1[0]);
let hourt = parseInt(num2[0]);
let hours = parseFloat(num3[0]);
let mult = hourt * hours;
let salary = mult.toFixed(2)
console.log("NUMBER = " + number);
console.log("SALARY = U$ " + salary);