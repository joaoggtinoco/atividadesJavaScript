/* 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente. */

function potencia(base, expoente) {
    //método 1
    const resul = Math.pow(base, expoente)
    //método 2
    let resul2 = base ** expoente
    return `${resul} ${resul2}`
}

console.log(potencia(2, 3))