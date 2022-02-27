const elementos = [
    {tag: 'p', texto: 'Frase 1 '},
    {tag: 'div', texto: 'Frase 2 '},
    {tag: 'footer', texto: 'Frase 3 '},
    {tag: 'section', texto: 'Frase 2 '}
];
const container = document.querySelector('.container');
const div =  document.createElement('div');

for(let i = 0 ; i < elementos.length ; i++){
    //get object 
    const {tag , texto} =  elementos[i];
    let elemento = document.createElement(tag);
    elemento.innerText = texto;
    //recebe um filho
    div.appendChild(elemento);
}
//recebe um filho
container.appendChild(div);