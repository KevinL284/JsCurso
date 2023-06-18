console.log(typeof Object)

class Produto {}
console.log(typeof Produto)

// Função 1: 

//Função sem retorno:
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
// imprimirSoma(2) Vai dar NaN 
imprimirSoma(2, 4, 5, 3, 6, 2) // só vai somar os dois primeiros por não estar definido 

//Função com retorno:

function soma(a, b = 0){ //É possével atribuir um valor padrão a operação a partir do "=" 
    //Ex: soma(a, b = 1) - Vai adicionar um caso não tenha um elemento b
    return a + b
}

console.log(soma(2, 3))
//soma(2,3) não funciona pois o valor é retornável

//Função 2:

//Armazenando uma função em uma variavel

const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
//Armazenando uma funcao arrow em uma variavel

const soma = (a, b) => {
    return(a + b)
}
console.log(soma(2, 3))

// retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))


const imprimir2 = a => console.log(a)
imprimir2('Legal!')
