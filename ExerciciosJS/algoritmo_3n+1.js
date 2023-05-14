function cycleLen(n){
    let steps = 1
    while(n !== 1){
        if (n % 3 === 0){
            n = n / 2 
        }else{
            n = 3 * n + 1
        }
        steps++
    }
    return steps
}

function maxcycle(i, j){
    let max = cycleLen(i)
    for(let k = i + 1; k <= j; k++){
        let currentCycle = cycleLen(k)
        if(currentCycle > max){
            max = k
        }
    }
    return i+''+j+''+max
}
console.log(maxcycle(1, 10))
console.log(maxcycle(100, 200))
console.log(maxcycle(201, 210))
console.log(maxcycle(900, 1000))