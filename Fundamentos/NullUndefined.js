let valor // não inicializada
console.log(valor)
//console.log(valor2) não existe

valor = null //ausência de valor
console.log(valor)
//console.log(valor.toString()) Erro por não apontar nada.

const produto = {}
console.log(produto.preco) //posso acessar contanto que exista antes do .
//console.log(produto.preco.a) Erro por não estar definido
console.log(produto)

produto.preco = 3.50
console.log(produto)

//teste
produto.preco = undefined //evitar atribuir undefined!
console.log(!!produto.preco)
console.log(produto)
//delete produto.preco Forma ideal de remover atributos.

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)
