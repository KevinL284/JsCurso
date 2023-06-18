const notas = [9.9, 6.4, 7.3, 8.4, 1.2, 4.5, 9.9]

//Sem CallBAck
const notasBaixas1 = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//With CallBack
const notasbaixas2 = notas.filter(function(nota){
    return nota < 7
})
console.log(notasbaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)
