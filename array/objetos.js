//factory functions
const pessoa= {
    nome :'Ricardo',
    idade :  'ari'
}
for(let chaves in  pessoa ){
    //pegar chaves
    console.log(chaves)
    //pegar VALOR   
    console.log(pessoa[chaves])
}

function criaPessoa(){
    
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome}  ${this.sobrenome}`;
        }
    }
}

