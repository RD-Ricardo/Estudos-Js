const numeros  = [2,3,4,54,564,];

const numerosEmDobro = numeros.map((valor)=>{
    return valor * 2;
});

const pessoa = [
    {nome:'Luiz', idade:392},
    {nome:'Maria', idade:392},
    {nome:'Leticia', idade:392},
    {nome:'Ricardo', idade:392},
]
const nomes = pessoa.map((valor)=>{
    return valor.nome;
});
const idade = pessoa.map((valor)=>{
    return {idade :valor.idade};
});

const comId  = pessoa.map((obj,indice)=>{
    obj.id = (indice + 1) * 1000;
    return obj
});
console.log(pessoa);
console.log(comId);