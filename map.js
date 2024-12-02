const pessoas = [
    {id: 3,nome: 'Gustavo'},
    {id: 4,nome: 'seila'},
    {id: 1,nome: 'leo'},
]

const novasPessoas = new Map()
for(const pessoa of pessoas){
    const {id} = pessoa
    novasPessoas.set(id, { ...pessoa})
}
console.log(novasPessoas.get(1))