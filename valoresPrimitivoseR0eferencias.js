/* Primitivos valores imutaveis - string, number, boolean, undefined, null, (bigint, symbol) */

// Valores por referência (mutavel) -array, object, function

let a = [1,2,'p']
let b = a
a.push(1.88)

console.log(a)
a.pop()
console.log(b) // Neste caso B aponta para o mesmo local da memória que o A

