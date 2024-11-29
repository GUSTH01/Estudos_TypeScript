const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')

const estilos = getComputedStyle(document.body)
const backgroudBody = estilos.backgroundColor

for (let i of ps){
    i.style.backgroundColor = 'black'
}