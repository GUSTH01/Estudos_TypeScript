/* Array são objetos */

let nome = 'Pericles'
let aluno = ['Gustavo', 'Thaua', 'Tais']

// Para inserir um elemento a um array basta colocar o sinal de atribuição
aluno[2] = 'Péricles'

aluno[aluno.length] = 'Luiza' // atribui no ultimo lugar 
console.log(aluno.length)// Para saber o tamanho do array

aluno.unshift('Paulo') // Atribui no começo
aluno.push('Leo') // atribui outro elemento no final da lista também
console.log(aluno)

aluno.pop() // Remove do fim
aluno.slice(0,-1) // indica que ele vai ler a lista inteira e remover o ultimo -1 remove de traz pra frente
aluno.shift() // Remove do começo
console.log(aluno)

delete aluno[2] // deleta o elemento no indice especificado porém não realoca os outros e fica um indice vazio


console.log(typeof aluno)
console.log(aluno instanceof Array)