/* 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores. */

function operações (x, y){
    return   `
    Soma = ${x + y} 
    Subtração = ${x - y}
    Multiplicação= ${x * y}
    Divisão = ${x / y}`
}

console.log(operações(1,2))