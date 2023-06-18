//Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)


const carro = {
    modelo: 'A4',
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco:{
            logradouro: 'Rua ABC',
            numero: 123
        } 
    }, 
    condutores: [{
        nome: 'Junior',
        idade: 21
    }, {
        nome: 'Izabel',
        idade: 50
    }], 
    CalcularValorSeguro: function(){
        //...
    }
}
carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'

console.log(carro)
delete carro.condutores
delete carro.proprietario.endereco
delete carro.CalcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)// ERRO