function formatarValorDecimal(valorDecimal){
    valoremReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valoremReais)
}


formatarValorDecimal(0.1 + 0.2)