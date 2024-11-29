function pegaData(){
const data = new Date()
const diaSemana = data.getDay() + 1
const hora = data.getHours()
let minutos = data.getMinutes()
const dia = data.getDate()
const mesNumero = data.getMonth() + 1
const ano = data.getFullYear() 
let diaSemanaTexto
let mesTexto
diaTexto()
if (minutos < 10)
    minutos = `0${data.getMinutes()}`

function diaTexto(){
switch (diaSemana){
    case(0):
    diaSemanaTexto = "Domingo"
    return diaSemanaTexto
    case(1):
    diaSemanaTexto = "Segunda feira"
    return diaSemanaTexto
    case(2):
    diaSemanaTexto = "Segunda feira"
    return diaSemanaTexto
    case(3):
    diaSemanaTexto = "Terça feira"
    return diaSemanaTexto
    case(4):
    diaSemanaTexto = "Quarta feira"
    return diaSemanaTexto
    case(5):
    diaSemanaTexto = "Quinta feira"
    return diaSemanaTexto
    case(6):
    diaSemanaTexto = "Sexta feira"
    return diaSemanaTexto
    case(0):
    diaSemanaTexto = "Sabado"
    return diaSemanaTexto
    case(7):
    diaSemanaTexto = "Nenhum dia"
    return diaSemanaTexto
}

}
const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outuro','Novembro','Dezembro']

mesTexto = meses[mesNumero]

let resultado = document.querySelector('.data-hoje')

    resultado.innerHTML = `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano}   ${hora}:${minutos}`
   




}
pegaData()
