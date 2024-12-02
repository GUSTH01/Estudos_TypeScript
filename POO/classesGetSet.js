// O symbol é basicamente o private do Javascript porque não pode ser acessado de fora da classe ou objeto
const _velocidade = Symbol('velocidade')
class Carro{
    constructor(nome){
        this.nome = nome
        this[_velocidade] = 0
    }

    set velocidade(valor){
        if(typeof valor !== 'number')return
        if(valor >= 100 || valor <= 0)return
        this[_velocidade] = valor

    }
    get velocidade(){
        return this[_velocidade]
    }

    acelerar(){
        if(this[_velocidade] >= 100) return
        this[_velocidade]++
    }

    freiar(){
        if(this[_velocidade] <= 0 )return
        this[_velocidade]--
    }
}

const car1 = new Carro('Fusca')
car1.velocidade = 100
console.log(car1)