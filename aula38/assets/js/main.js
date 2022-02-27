const paragrafos =  document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilos = getComputedStyle(document.body);// pegando todos os estilos do body
const backgroundColorBody =  estilos.backgroundColor;



for(let p in ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color= '#fff';
}