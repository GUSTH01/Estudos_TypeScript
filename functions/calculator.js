function criaCalculadora (){
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('btn-clear'),

        inicia (){
            this.clickBotoes()
            this.pressionaEnter()

        },
        pressionaEnter(){
            this.display.addEventListener('keyup', e =>{
                if (e.keyCode === 13){
                    this.fazConta()
                }
            } )
        },
        apagaNum(){            
            this.display.value = this.display.value.slice(0,-1)  
        },

        clearDisplay(){
            this.display.value = ' '
        },

        fazConta(){
            let conta = this.display.value

            try{
                conta = eval(conta)

                if(!conta){
                    alert('Contqa invalida')
                    return
                }
                this.display.value = String(conta)
            }catch(e){
                alert ('conta Invalida')
                return
            }
            
        },

        clickBotoes (){
            document.addEventListener('click', e =>{
            const el = e.target

            if(el.classList.contains('btn-num')){
                this.bntParaDisplay(el.innerText)
            }
            if(el.classList.contains('btn-clear')){
                this.clearDisplay()
            }
            if(el.classList.contains('btn-del')){
                this.apagaNum()
            }
            if(el.classList.contains('btn-eq')){
                this.fazConta()
            }


            })
        },
        bntParaDisplay(valor){
            this.display.value += valor
        }
    }
    
    


}
const calculadora = criaCalculadora()
calculadora.inicia()