const data = new Date('1982-04-20 00:00:00');
const diaSemanda = data.getDay();


let diaSematexto;

switch(diaSemada){
    case 0 :  
        diaSematexto = 'Domingo';
    break;
    case 1 :  
        diaSematexto = 'Segunda'
    break;
    default:
    diaSematexto = '';
}
console.log(diaSemanda)
