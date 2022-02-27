/* 
    Operadores Lógicos
    && -> AND -> E   =  Todas as expressões precisam ser verdadeira para retornar true 
    || -> OR  -> Ou  =  precisa de uma expressão true para retornar true || só retorna false se todos for false
    !  -> NOT -> NÃO =  Inverti uma expressão 
*/

const expressao1 = true && true;  //retorna true   || true e true 
const expressao2 = true && false; // retorna false || true e false 
const expressao3 = true || false; // retorna true  || true ou false
const expressao4 = false || false;// retorna false|| false ou false
const expressao5 = !false;        // retorna true || false ao invertido é true
const expressao6 = !true;         // retorna false || true ao invertido é false
console.log(expressao6); 


