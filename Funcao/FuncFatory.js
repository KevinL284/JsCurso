/*const prod1 = {
    nome: '...',
    preco: 3268,
}

Factory Simpless
function criarPessoa(){
    return{
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
*/
//Fact 2

function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('ipad', 3324.49))