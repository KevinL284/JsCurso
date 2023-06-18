function bhaskara(ax2, bx, c){
    let resultados = []
    let delta = (bx ** 2) - (4 * ax2 * c)
    if(delta < 0){
        return 'Delta é negativo'
    }
    let x1 = (-bx + Math.sqrt(delta))/(2*ax2)
    let x2 = (-bx - Math.sqrt(delta))/(2*ax2)
    resultados.push(x1)
    resultados.push(x2)
    return resultados
}
console.log(bhaskara(3, 6, 1))
console.log(bhaskara(25, 44, 9))
console.log(bhaskara(65, 24, 19))