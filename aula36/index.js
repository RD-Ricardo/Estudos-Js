// for in -> ler os indices ou chaves do objct

const pessoa = {
    nome:  'Ricardo',
    sobrenome: 'Dias',
    idade: 16,
};

for(let key in pessoa){
    
    console.log(pessoa[key])
}