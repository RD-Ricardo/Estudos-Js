/*
    Operadores de comparação
    = atribuição de valor 
    > maior que 
    >= maior que ou igual a 
    < menor que
    <= menor que ou igual a 
    == igualdade (valor)
    === igualdade estrita (valor e tipo)
    != diferente (valor)
    !== diferente estrito (valor e tipo) 
*/

let num1 = 10;
let num2 = 11;
let comp1 = num1 > num2;   // retorna false ||  10 não maior que 11
let comp2 = num1 < num2;   //retorna true   ||  10 é menor que 11
let comp3 = num1 >= num2;  //retorna false  ||  10 é maior  ou igual a 11
let comp4 = num1 <= num2;  //retorna true   ||  10 é menor  ou igual a 11 
let comp5 = num1 == num2;  //retorna false  ||  10 não é igual 11
let comp6 = num1 === num2; //retorna false  ||  10 é do mesmo tipo e valor que 11 
let comp7 = num1 != num2;  //retorna true   ||  10 é diferente que 11
let comp8 = num1 !== num2; //retorna true   ||  10 é dirente e do mesmo tipo que 11
console.log(comp1);