//função 
function Calculadora(){
    this.display = document.querySelector('display');


    this.capturarCliques = ()=>{
        document.addEventListener('click' , e =>{
            const el = e.target;
            if(el.classList.contains('btnNum')){
                this.addNumDisplay(el);
            }
            
        })  
    }

    this.inicia = ()=> {
        this.capturarCliques();
    }
}

const calculadora = new Calculadora();
calculadora.inicia();