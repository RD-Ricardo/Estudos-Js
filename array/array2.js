//array literal
//valores de um array
const numeros = [1,2,3];
const numeros2 = [4,5,6];

const a3 = numeros.concat(numeros2, [7 ,8, 9] , 'Luiz');

const a = [...numeros, ...numeros2];
console.log(a);