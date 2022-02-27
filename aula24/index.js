 /*
    Entre 0 - 11 bom dia 
    Entre 12 - 17 Boa tarde
    Entre 18 -23 Boa noite

    IF pode ser usado sozinho
    Else IF  ou ELse sempre que utilizo tem que ter um if antes 
    Só pode ter um else na checagem
 */
const hora = 50;
if(hora >= 0 && hora <= 11){
    console.log('Bom dia');
} 
else if(hora >=12 && hora <= 17){
    console.log('Boa tarde');
}
else if(hora >=18 && hora <= 23){
    console.log("Boa noite");
}
else{
    console.log("Olá")
}
