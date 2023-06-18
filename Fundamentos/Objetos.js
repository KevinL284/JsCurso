const prod1 = {}
prod1.nome = 'Celular ProT9'
prod1.preço = 2983.90
prod1['!esconto!'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa',
    preco: 69.99 //NÃO É JSON
}

//'{"nome": "Camisa", "preco": 69.99}' Isso é JSON

console.log(prod2)
