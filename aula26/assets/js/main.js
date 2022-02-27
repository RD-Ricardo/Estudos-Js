const form = document.querySelector('#form');
form.addEventListener('submit' , function(event){
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const Altura = Number(inputAltura.value);

    console.log(peso, Altura);

    if(!peso)
    {
        setResultado("Peso invalido", false);
        return;
    }
    if(!Altura )
    {
        setResultado("Altura invalida", false);
        return;
    }
    const imc = getImc(peso,Altura);
    const nivelImc = getNivelImc(imc);

    console.log(imc ,nivelImc);

    const msg = `Seu imc é ${imc} (${nivelImc})`;
    setResultado(msg , true)
});
function getNivelImc(imc){
    const nivel = ['Abaixo do peso' , 'peso normal', 'Sobpreso', 'obesidade grau1', 'obesidade grau 2' , 'obesidade grau 3'];
    
    if(imc >=39.9) return nivel[5];
    if(imc >=34.9) return nivel[4];
    if(imc >=29.9) return nivel[3];
    if(imc >=24.9) return nivel[2];
    if(imc >=18.5) return nivel[1];
    if(imc < 18.5) return nivel[0];
    
}

function getImc(peso , altura){
    const imc = peso / altura **2;
    return imc.toFixed(2);
}

function criaP(){
    const p = document.createElement('p');
    return p;   
}

function setResultado(msg , isValid){
    const resultado =  document.getElementById('rsp');
    resultado.innerHTML = '';

    const p = criaP();

    if(isValid) p.classList.add('paragrafo-resultado');
    else p.classList.add('bad'); 

    p.innerHTML = msg;
    resultado.appendChild(p);
}