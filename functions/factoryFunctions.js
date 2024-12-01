function criapPessoa (nome, sobrenome, a, b){
    return{
        nome,
        sobrenome,
        fala: function(assunto){
            return `${nome} está ${assunto}.`
        },
        altura: a,
        peso: b,

        get imc (){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
   
}

const p1 = criapPessoa('Gustavo', 'Fonseca', 1.8, 80)
console.log(p1.imc)