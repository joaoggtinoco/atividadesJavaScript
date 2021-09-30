/* 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false. */

function divisivelTres (inteiro) {
    if (inteiro % 3 == 0 ){
        return true
    }
    return false
}

console.log(divisivelTres(9))
console.log(divisivelTres(8))
console.log(divisivelTres(1))
console.log(divisivelTres(2067))
