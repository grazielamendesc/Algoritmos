function calcular (um, dois, tres, quatro){

const multiplicar =parseFloat (um * dois * quatro / tres)

return multiplicar



}

function somar (um, dois) {

const soma = parseFloat (um + dois)

return soma

}

function executar () {


    const um = parseFloat (document.querySelector ("#investimento").value)
    const dois = parseFloat (document.querySelector ("#porcentagem").value)
    const tres = parseFloat (document.querySelector ("#tempo").value)
    const quatro = parseFloat (document.querySelector ("#periodo").value)
    
    const rendimento1 = calcular (um, dois, tres, quatro)
    const montante = somar (rendimento1, um)

    document.querySelector ("#valorFinal").innerHTML = `O rendimento durante este periodo foi de ${rendimento1} totalizando o valor de ${montante}`

}



