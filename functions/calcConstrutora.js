// Função construtora retorna objetos
// Contrutora criar funçoes com letra maiuscula NovaPessoa
function Pessoa (nome, sobrenome){
    const ID = 123456

    const metodoInterno = function(){
        
    }

    this.nome = nome,
    this.sobrenome = sobrenome,

    this.metodo = function(){
        console.log(this.nome + ' Sou um metodo')
    }

}

const p1 = new Pessoa('Gustavo', 'Fonseca')
const p2 = new Pessoa('Pericles', 'Plinio')

p2.metodo()