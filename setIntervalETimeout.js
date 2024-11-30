function mostraHora(){
    const hora = new Date()

    return hora.toLocaleTimeString('pt-BR',{
        minute: '2-digit',
        hour: '2-digit',
        second: '2-digit',
        hour12: false
    })
}
const timer = setInterval(function(){
    console.log(mostraHora())
}, 1000)

setTimeout(function(){
    clearInterval(timer)
}, 3000)
setTimeout(function(){
    console.log('Olá mundo')
}, 5000)