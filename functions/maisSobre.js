function funcao(){
    let total = 0

    for (let i of arguments){ // arguments é o objeto que sustenta todos os parametros passados pela chamada da função
        total += i
    }
    console.log(total)
}
funcao(1,2,3,4,5,6,7,8,9)
