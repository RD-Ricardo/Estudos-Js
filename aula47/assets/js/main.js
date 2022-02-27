function getTimeFrom(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12:false,
        timeZone: 'GMT'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let time;

function onTime(){
    time = setInterval(()=>{
        segundos++;
        relogio.innerHTML = getTimeFrom(segundos);
    } , 1000)
}

iniciar.addEventListener('click', (event)=>{
    relogio.classList.remove('pausado')
    clearInterval(time);
    onTime();
});


pausar.addEventListener('click', (event)=>{
    relogio.classList.add('pausado')
    clearInterval(time);
});

zerar.addEventListener('click', (event)=>{
    clearInterval(time);
    relogio.innerHTML =  '00:00:00';
    segundos = 0
});

