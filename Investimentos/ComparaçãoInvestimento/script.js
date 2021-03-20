function dividir (um, dois) {

    const calculo = um / dois

    return calculo
}

function analisar (){

    const valor1 = parseFloat ( document.querySelector ("#valorUm").value )
    const retorno1 = parseFloat ( document.querySelector ("#retornoUm").value )
    const valor2 = parseFloat ( document.querySelector ("#valorDois").value )
    const retorno2 = parseFloat ( document.querySelector ("#retornoDois").value )

    const analiseUm = dividir (retorno1, valor1)
    const analiseDois = dividir (retorno2, valor2)

   if (analiseUm < 1 && analiseDois < 1) {

    document.querySelector ("#resultAnalise").innerHTML = "Ambos não valem a pena pois darão prejuízo"
     
   } else {

    if (analiseUm > analiseDois) {

        document.querySelector ("#resultAnalise").innerHTML = "Investimento 1 é o melhor"
   
    } else {
        document.querySelector ("#resultAnalise").innerHTML = "Investimento 2 é o melhor"
    }

   }
}

