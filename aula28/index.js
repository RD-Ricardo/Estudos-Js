// 60 * 60 = 1 hora * 24 horas * 1000 valor em milssimo de segundos 
//const umDia = 60 * 60 * 24 * 1000;
// ano , mes , dia , hora, milessimo de sugundos 
// mile segundos só vai até 999
// mes começa do zero
//const data = new Date(2019 , 3 , 20, 15,14,27, 1000); // 01/01/1970 timestamp unix

function zero(num){
    return num >=10 ? num : `0${num}`; 
}
function formatarData(data){
    const dia = zero(data.getDate());
    const mes = zero(data.getMonth() +  1);
    const ano = zero(data.getFullYear());
    const hora= zero(data.getHours());
    const min = zero(data.getMinutes());
    const segundos = zero(data.getSeconds());

    return `${dia} /${mes} /${ano}  ${hora}: ${min}: ${segundos}`;   
}
const dataNow = new Date()
const dataBrasil = formatarData(dataNow);
console.log(dataBrasil)