let num = [5,9,2]
//num[3]= 6
num.push(7)  //METODO
num.length   // LENGTH É UM ATRIBUTO
num.sort()   // METODO QUE COLOCA EM POSICAO CRESCENTE

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]}`)
let pos = num.indexOf(2)
if (pos == -1) {
    console.log('O valor não foi definido!')
}else {
    console.log(`O valor está na posição ${pos}`)
}
//let valores = [8, 1, 7, 4, 2, 9]
//console.log(valores)
/*
 console.log(valores[0])
 console.log(valores[1])
 console.log(valores[2])
 console.log(valores[3])
 console.log(valores[4])
 console.log(valores[5]
*/
/*
for(let pos=0; pos < valores.length; pos++){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}

 
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
