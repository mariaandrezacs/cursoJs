// Faça a leitura de um valor inteiro. Em seguida, calcule o menor 
// número de notas possíveis (cédulas) onde o valor pode ser decomposto. 
// As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. Na 
// sequência mostre o valor lido e a relação de notas necessárias.

// Você receberá um valor inteiro N (0 < N < 1000000).

// Exiba o valor lido e a quantidade mínima de notas de cada tipo necessárias, 
// seguindo o exemplo de saída abaixo. Após cada linha deve ser imprimido o fim de linha.

let valor_entrada = parseInt(gets());

const cedulas = [100, 50, 20, 10, 5, 2, 1];

console.log(valor_entrada);

for (let cedula of cedulas) {
    let qtd_cedula = parseInt(valor_entrada / cedula);

    console.log(qtd_cedula + " nota(s) de R$ " + cedula + ",00 ");

    valor_entrada = valor_entrada % cedula;

}