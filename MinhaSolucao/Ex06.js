/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

function jurosSimples (capInicial=0, txJuros=0, tempoAplicacao=0){
    let etapa1 = 1+ (tempoAplicacao * txJuros)
    let valorFInal = capInicial * etapa1
    return valorFInal
}

function jurosComposto (capInicial=0, txJuros=0, tempoAplicacao=0){
    let etapa1 = 1 + txJuros 
    let etapa2 = etapa1 ** tempoAplicacao
    let valorFInal = capInicial * etapa2
    return valorFInal
}


console.log(jurosSimples(100, 0.02, 2))
console.log(jurosComposto(100, 0.02, 2)) // O resultado desta função retorna uma incoerência. 