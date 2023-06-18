function Carro(velocidadeMaxima = 200, delta = 5){
    // mtd pv
    let velocidadeAtual = 0
    //mtp pb

    this.acelerar = function (){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }
    //metodo publico
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }
}

const hb20 = new Carro
hb20.acelerar()
console.log(hb20.getVelocidadeAtual())

const UnoDeFirmaComAdesivoEescada = new Carro(9999, 999)
UnoDeFirmaComAdesivoEescada.acelerar()
UnoDeFirmaComAdesivoEescada.acelerar()
UnoDeFirmaComAdesivoEescada.acelerar()
console.log(UnoDeFirmaComAdesivoEescada.getVelocidadeAtual())
