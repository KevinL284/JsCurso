const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "kit canetas", "preco": 24.50}',
    '{ "nome": "Caderno", "preco": 33.65}',
    '{ "nome": "agenda", "preco": 23.48}'
]
// Resolução COD3R:
//o desafio dele era só com os preços...

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado) //*/

// !!DESAFIO!!  mostrar apenas os preços e nomes em array

/*/ Minha resolução:

const carrinhoObjetos = carrinho.map(JSON.parse)

const precos = carrinhoObjetos.map(produto => produto.preco)
console.log(precos) // [3.45, 24.50, 33.65, 23.48]
const nomes = carrinhoObjetos.map(produto => produto.nome)
console.log(nomes) // ["Borracha", "kit canetas", "Caderno", "agenda"] */
 
