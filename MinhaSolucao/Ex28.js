//28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function lerVetor (vetor = []) {
    let contadorPar = 0; let contadorImpar=0;
    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] % 2 === 0){
            contadorPar++
        }else if(vetor[i] % 2 === 1){
            contadorImpar++
        }
    }
    return `O vetor possui ${contadorPar} pares e ${contadorImpar} impares.`
}
let vet = [1,2,3,4,5,6,7,8,9,10,11,12,13]
console.log(lerVetor(vet))