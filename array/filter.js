//filter ->  vai sempre retornar um array com a mesma quantidade de elementos ou menos.

const numeros = [4,5,2,20,23,10]

function callBackFilter(valor ,indice ,array){
    return valor > 10;
}
const numerosFiltrados = numeros.filter(callBackFilter);
console.log(numerosFiltrados);



const pessoas=[
    {nome:'Luiz', idade:392},
    {nome:'Maria', idade:392},
    {nome:'Leticia', idade:392},
    {nome:'Luiz', idade:392},
]



const pessoasComNomeGrandes = pessoas.filter((valor)=>{
     return valor.nome.length >= 5 ;
});
console.log(pessoasComNomeGrandes)