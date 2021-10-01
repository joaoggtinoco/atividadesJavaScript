/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

function mediaPonderada (codigo = null, nota1 = null, nota2 = null, nota3 = null) {
    
    //for(codigo; codigo=-1; codigo--){
    let mp; let pesoMaior=4; let pesoMedio=3; let pesoPequeno=3 

    if (nota1 > nota2 && nota1 > nota3 ){
        mp = ((nota1*pesoMaior+nota2*pesoMedio+nota3*pesoPequeno)/(pesoMaior+pesoMedio+pesoPequeno))   
     } else if (nota2 > nota1 && nota2 > nota3) {
        mp = ((nota1*pesoMedio+nota2*pesoMaior+nota3*pesoPequeno)/(pesoMaior+pesoMedio+pesoPequeno))
     } else if (nota3 > nota1 && nota3 > nota2) {
        mp = ((nota1*pesoMedio+nota2*pesoPequeno+nota3*pesoMaior)/(pesoMaior+pesoMedio+pesoPequeno))
     } else if ( nota1 == nota2 && nota1 > nota3 || nota1 == nota3 && nota1 > nota2 || nota2 == nota3 && nota2 > nota1){
        mp = ((nota1*pesoMedio+nota2*pesoMedio+nota3*pesoMedio)/(pesoMedio+pesoMedio+pesoMedio))
     } else {
        mp = ((nota1*pesoMedio+nota2*pesoMedio+nota3*pesoMedio)/(pesoMedio+pesoMedio+pesoMedio))
     }

     let mensagem
     if(mp >= 5){
        mensagem = 'APROVADO'
     } else if (mp< 5){
        mensagem = 'REPROVADO'
     }

     console.log(`
                Código aluno: ${codigo}
                Nota 1: ${nota1}
                Nota 2: ${nota2}
                Nota 3: ${nota3}
                Média Ponderada: ${mp.toFixed(2)}
                Status: ${mensagem}`)
}


mediaPonderada( 5, 2, 2, 2)
mediaPonderada( 5, 7.4, 6.9, 3.4)
mediaPonderada( 5, 7.4, 9.1, 5)