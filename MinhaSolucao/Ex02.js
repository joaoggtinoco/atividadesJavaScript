/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */

function tipoTriangulo(x, y, z) {
     if (x === y && y === z) {
        return 'Esse é um triângulo equilátero'
    } else if (x == y || y == z || x == z) {
        return 'Esse é um triângulo isósceles'
    }else {
        return 'Esse é um triângulo escaleno'
    }
}

console.log(tipoTriangulo(1,1,1))
console.log(tipoTriangulo(1,1,2))
console.log(tipoTriangulo(2,1,1))
console.log(tipoTriangulo(1,2,1))
console.log(tipoTriangulo(1,2,3))




