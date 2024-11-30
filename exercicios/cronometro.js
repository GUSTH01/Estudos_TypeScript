const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const parar = document.querySelector('.parar')
const zerar = document.querySelector('.zerar')

function timer(){
const data = new Date("00:00:00")

return hora.toLocaleTimeString('pt-BR',{
    minute: '2-digit',
    hour: '2-digit',
    second: '2-digit',
    hour12: false
})

}

iniciar.addEventListener('click', function(event){
    alert('iniciou')
});
parar.addEventListener('click', function(event){
    alert('parou')
});
zerar.addEventListener('click', function(event){
    alert('Zerou')
});