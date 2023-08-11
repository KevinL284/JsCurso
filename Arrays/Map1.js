const nums = [1, 2, 3, 4, 5]

//O map é um for com um propósito:

let resultado = nums.map(function(e) {
   return e * 2
})

console.log(resultado)

//other test's

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}` 

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
//Lembrando que arrow func tem retorno implicito, se n retornar nada é undefined.
//EX: se eu comentar a linha 6 que é o return:
// :)  //return e * 2; ao Executar o resultado será o array com as suas posições em undefined.

