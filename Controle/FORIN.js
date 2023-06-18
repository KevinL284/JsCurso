const notas = [6.8, 7.7, 2.5, 7.2, 9.9, 10]

for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'João',
    sobrenome: 'Ribeiro',
    idade: 56,
    peso: 70
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

console.log(atributo)
