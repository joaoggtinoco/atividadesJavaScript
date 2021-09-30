/* 11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false. */

function anosBissextos(ano) {
    if (ano <= 0){
        console.log('Não existe ano zero ou negativo')
    }else if (ano % 400 == 0) {
        console.log('Ano Bissexto de 400 em 400 anos')
    } else if (ano % 100 == 0) {
        console.log('Não é um ano Bissexto')
    } else if (ano % 4 == 0) {
        console.log('Ano Bissexto de 4 em 4 anos')
    } else { 
        console.log('Não é um ano Bissexto')
    }
}

anosBissextos(4)
anosBissextos(8)
anosBissextos(400)
anosBissextos(100)
anosBissextos(500)
anosBissextos(900)
anosBissextos(1000)
anosBissextos(2016)
anosBissextos(2008)