function jurosSimples(capitalIni, Taxa, Tempo){
 return capitalIni + (capitalIni * Taxa * Tempo)
}
function jurosCompostos(capitalIni, Taxa, Tempo){
    return capitalIni * (1 + Taxa) ** Tempo
}

console.log(jurosSimples(100, 5, 0.04))
console.log(jurosCompostos(100, 5, 4))