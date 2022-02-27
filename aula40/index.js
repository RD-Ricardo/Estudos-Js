const numeros = [1,2,3,4,5,6,7,8]

for(let numero  of numeros){
    if(numero === 2 ){
        console.log('pelou o numero dois');
        continue;
    }
    if(numero === 7 ){
        console.log("dkljfkj")
        break;
    }
    console.log(numero)
}