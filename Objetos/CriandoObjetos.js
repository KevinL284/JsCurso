//usando a notação literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 3442.99, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//function Factory

function CriarFuncionario(nome, idade, salarioBase, faltas, cargo){
    return{
        nome,
        idade,
        salarioBase,
        faltas,
        cargo,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = CriarFuncionario('João', 34, 4602.23, 3, 'Sub-Gerente')
const f2 = CriarFuncionario('Ana', 44, 6602.23, 5, 'Gerente')
console.log(f1.getSalario(), f2.getSalario())


//Object.create
const filha = Object.create(null)
filha.nome = 'Iza'
console.log(filha)

//Uma função famosa que retorna Objeto...
const fromJson = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)