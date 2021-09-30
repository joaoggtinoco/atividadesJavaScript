/* 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */

function divisao (dividendo, divisor){
    let resultado = dividendo / divisor
    console.log(`Resultado decimal = ${resultado}` )
    console.log(`Resultado inteiro =  ${Math.floor(resultado)}`)
    console.log(`Resto =  ${dividendo % divisor}`)
}

divisao(100, 9)

