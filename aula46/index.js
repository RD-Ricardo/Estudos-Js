function mostrarHora(){
    let data =  new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}
const timer = setInterval(function (){
    console.log(mostrarHora());
}, 1000);

//para a função
setTimeout(()=>{
    clearInterval(timer);
}, 5000);

//depois de um tempo executa  a funcao
setTimeout(()=>{
    console.log("ola mundo")
},6000)

