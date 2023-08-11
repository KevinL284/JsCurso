//criação de map2
Array.prototype.map2 = function(callback){
 const newArray = []
 for (let i = 0; i < this.length; i++){
    newArray.push(callback(this[i], i, this))
 }
 return newArray
}  //*/

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "kit canetas", "preco": 24.50}',
    '{ "nome": "Caderno", "preco": 33.65}',
    '{ "nome": "agenda", "preco": 23.48}'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado) 