
//factrory function retorna um objeto
function criaCalculadora(){
    return {
        display:document.querySelector('.display'),
        btn:document.querySelector('.btnClear'),
        inicia(){
            this.cliqueBotoes();
            this.pressionarEntrer();
        },
        pressionarEntrer(){
            this.display.addEventListener('keyup', e =>{
                if(e.KeyCode === 13){
                    this.realizaConta();
                }
            });
        },
        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta)
                if(!conta){
                    alert("Conta invalida");
                    return;
                }

            }catch(e){

            }
        },
        clearDisplay(){
            this.display.value =  '';
        },
        btnParaDisplay(valor){
            this.display.value+= valor;
        },
        ApagarUm(){
            this.display.value =  this.display.value.slice(0,-1);
        },
        cliqueBotoes(){
            document.addEventListener('click', (e)=>{
                const el = e.target;

                if(el.classList.contains('btnNum')){
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btnClear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('btnDel')){
                    this.ApagarUm();
                }

                if(el.classList.contains('btnEq')){
                    this.realizaConta();
                }
            });
        },
    };
}


const calculadora =  criaCalculadora();
calculadora.inicia();

