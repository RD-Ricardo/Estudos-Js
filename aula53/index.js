function retornaFuncao(nome){
    return function(){
        return nome;
    };
}

const funcao =  retornaFuncao('Ricardo');
const sak = retornaFuncao('dias');
console.log(sak())