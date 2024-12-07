const nome: string = 'Luiz'

const idade: number = 30

const adulto: boolean = true

const simbolo: symbol = Symbol('qualquer-symbol')

const arrauDeNumeros: Array<number> = [1,2,3,4,5,6,7,8,9]

const pessoa: {nome: string, idade: number, adulto?: boolean}={

    nome: 'Luiz',
    idade:30

}


function soma(x:number, y:number){
    return x+y
}

const result = soma(2,2)
