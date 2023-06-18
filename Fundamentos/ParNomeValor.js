//Par nome / Valor
const saudacao = 'Opa' // contexto léxico 1

function exec(){
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

//objetos são grupos aninhados de pares nome.valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 80,
    endereco:{
        logradouro: 'Rua Pedro Cabral',
        numero: 131
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)