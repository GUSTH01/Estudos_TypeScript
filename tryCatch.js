function soma(x ,y){
    if(typeof x != 'number' || typeof y != 'number'){
        throw new ReferenceErrorror('X e Y precisma ser numeros')
    }
    return x + y
}
try{
console.log(soma(1,2))
console.log(soma(1,'per'))
}catch(error){
    console.log('Alguma coisa')
}