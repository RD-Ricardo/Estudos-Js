const h1 =  document.querySelector('.container h1');
const data = new Date();
function getDiaSemadaTexto(diaSemana){
    const  diaSemadaTexto = ['domingo', 'segunda', 'terca', 'quarta' , 'quinta' , 'sexta' , 'sabado'];
    return diaSemadaTexto[diaSemana]
}
function getNomeMes(numeroMes){
    const nomeMes  = ['janeiro' , 'fevereiro', 'marco' ,'maio' , 'junho' , 'julho', 'agosto' , 'setembro' , 'outubro'];
    return nomeMes[numeroMes];
}
h1.innerHTML =    ' hoje é  '+ ` ${getDiaSemadaTexto(data.getDate() +  1)}` + ` dia `+  ` ${data.getDay()- 1 }` + ` ${getNomeMes(data.getMonth() - 1 )}` + 
    ` ${data.getHours()} : ${ data.getMinutes()} :${data.getSeconds()}`;




