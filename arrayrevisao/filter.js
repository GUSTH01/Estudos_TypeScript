const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]


const numerofFiltrados = numeros.filter( (valor,indice,array) =>{
    console.log(indice)
    console.log(array)
    return valor > 10
    
})


