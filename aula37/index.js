// for classico -  geralmente com iteraveis (array ou strings)
// for in -  retorna o indice ou chave (array ou strings , objetos)
const nome = ['ricardo', 'skajd', ' kdajikdf'];

const pessoa = {
    nome: 'Ricardo',
    sobrenome: 'Dias'
};
//para objeto usar o for in
for(let i in pessoa){
    console.log( pessoa[i])
}
for(let i = 0; i< nome.length ;  i++){
    console.log(nome[i])
}
console.log("############")
//pega com o indice 
for(let i in nome){
    console.log(nome[i]);
}
console.log("############")
//pegar só o valor do array
for(let valor of nome){
    console.log(valor)
}
console.log("############")
nome.forEach(function(valor, indice){
    console.log(valor);
});