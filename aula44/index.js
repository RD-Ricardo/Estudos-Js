function soma(x,y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisa ser numeross');
    }

    return x +  y;
}

try{
    console.log(soma("" , 2))

}catch(e){
    console.log(e);
}   