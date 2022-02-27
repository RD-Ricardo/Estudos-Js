function fizBuzz(numero){

    if(typeof numero !== 'number'){
        return numero
    }
    if(numero % 5 === 0  && numero % 3 === 0 ) return 'FizzBuz';
    if(numero % 3 === 0 ) return ' fiz';
    if(numero % 5 === 0 ) return 'Buz';
    return numero
}

for(let i = 0 ; i <= 100; i++){
    console.log(i , fizBuzz(i))
}