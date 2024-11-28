function meuEscopo (){
    let form = document.querySelector('.form')
    let resultado = document.querySelector('.Resultado')
    let arrayy

    function recebeEventoForm (evento){
    evento.preventDefault()
    let nome = form.querySelector('.Nome')
    let sobrenome = form.querySelector('.Sobrenome')
    let peso = form.querySelector('.Peso')
    let altura = form.querySelector('.Altura')
    arrayy = [nome.value,sobrenome.value,peso.value,altura.value]
    resultado.innerHTML = arrayy
    }
    form.addEventListener('submit', recebeEventoForm)
    

}
meuEscopo()