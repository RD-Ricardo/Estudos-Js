function retonaHora(data){
    // se tiver uma data e não ser da instancia daTe
    if(data  && !(data instanceof Date)){
        throw new TypeError ('Esperando istancai de Date.');
    }
    //se não tiver uma data vai criar uma e retornala 
    if(!data){
        data  = new Date();
    }

    return data;
}
const hora = retonaHora();
console.log(hora);