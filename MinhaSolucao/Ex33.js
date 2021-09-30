/* 33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.*/

const vetorInteiro = [10, 20, 30, 40]
const vetorString = ['João', 'Maria', 'José', 'Aline']
const vetorDouble = [50.10, 60.20, 70.30, 80.40]

let vetorResultado = vetorInteiro.concat(vetorString, vetorDouble) 

function concatenar(...args){
    resultado = []
    for(i=0; i<arguments.length; i++){
    resultado = resultado.concat(arguments[i])
    }
    return resultado
}

//Forma 1
console.log(vetorResultado)

//Forma 2
console.log(concatenar(vetorInteiro, vetorString, vetorDouble))

//Forma 3
console.log([].concat(vetorInteiro, vetorString, vetorDouble))