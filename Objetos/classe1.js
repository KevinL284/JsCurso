class Lancamento{
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

addLancamentos(...lancamento){
    lancamento.forEach(l => this.lancamento.push(l))
}

sumario(){
    let valorConolidado = 0
    this.lancamentos.forEach(l =>{
        valorConsolidado += l.valor
    })
    return valorConolidado
}
}

const salario = new Lancamento('Salario', 45000)
const contadeluz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2023)
contas.addLancamentos(salario, contadeluz)
console.log(contas.sumario())