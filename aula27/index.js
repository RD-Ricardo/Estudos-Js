// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso
const pontucaUsuario = 1000;
const nivelUsuario = pontucaUsuario >= 1000 ? 'Usuario Vip' : 'Usuario normmal';


const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario , corPadrao);

