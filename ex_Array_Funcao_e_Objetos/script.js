function meuEscopo (){
    let form = document.querySelector('.form')

    /*form.onsubmit = function (evento){
        evento.preventDefault();
        alert(1)
        console.log('Foi enviado')
    };*/
    let contador = 1
    function recebeEventoForm (evento){
        evento.preventDefault();
        console.log(`Form não encontrado ${contador}`)
        contador++
    }
    form.addEventListener('submit', recebeEventoForm)

}
meuEscopo()