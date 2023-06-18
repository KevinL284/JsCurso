const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) //mostram os valores escolhidos pelo dev dentro dos []
console.log(valores[4]) // Quando a posição escolhida não estiver definida o valor será undefined.

valores[4] = 10 // adiciona valores e posições
console.log(valores) // Mostra Array
console.log(valores.length) // Mostra a quantidade de itens dentro da Array

valores.push({id: 3}, false, null, 'teste') //Também add novos elementos a Array. Além disso pela facilidade do JS é possível passar Booleans, objetos, Testes e Nulos
console.log(valores)

console.log(valores.pop())
delete valores[0] // deleta valores

console.log(valores)

console.log(typeof valores) //Mostra o tipo de valor

