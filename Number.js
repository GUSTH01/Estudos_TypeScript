let numero = 10.5
let numerodois = 2.5


console.log(Number.isInteger(numero)) // Retorna se o numero é inteiro
console.log(numero.toFixed(1))// arredonda o numero ou mostra a quantidade de caracteres depois do ponto que você deseja
console.log(numero.toString(2)) // represntação binaria

let numeroRedondoBaixo = Math.floor(numero) // arredonda para baixo
let numeroRedondoCima = Math.ceil(numero) // arredonda para baixo
let numeroRedondoProximo = Math.round(numero) //// arredonda para o mais proximo

console.log(numeroRedondoBaixo)
console.log(numeroRedondoCima)
console.log(numeroRedondoProximo)

console.log(Math.max(1,2,3,4,5,6,-10,-50,-1500,1500,9,8,7,6)) // pega o maior
console.log(Math.min(1,2,3,4,5,6,-10,-50,-1500,1500,9,8,7,6)) // pega o menor

console.log(Math.round(Math.random() * (10 - 5) + 5))

