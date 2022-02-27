const btnAddTarefa =  document.querySelector('.btnAdd');
const input = document.querySelector('.input-nova-tarefa');
const tarefas = document.querySelector('.tarefas');

//função para criar um LI
function criarLi(){
    //criando o elemento li
    const li = document.createElement('li');
    //setando atributos a esse elemento
    li.setAttribute('class', 'teste')
    //retornando esse elemento
    return li;
}
function criarSmall(){
    const small =  document.createElement('small');
    small.setAttribute('class', 'hora');
    return small;
}
function limpar(){
    input.value = '';
    input.focus();
}

function zero(num) {
    if(num < 10){
        let zeroEsqueda = `0${num}`;
        return zeroEsqueda;
    }
    return num;
}
//função de criar uma tarefa que recebe um texto
function criarTarefa(texto){
    //passando a funcao criarLi para uma variavel
    const li = criarLi();
    //passando o valor da variavel para o html com texto recebidos
    li.innerText = texto;
    //para adicionar esse elemento no html precisa ser filho do elemento tarefas
    tarefas.appendChild(li)
    let dataNow = new Date();
    let strid = `${dataNow.getHours()}:${zero(dataNow.getMinutes())}:${zero(dataNow.getMinutes())}`;
    const sml = criarSmall();
    sml.innerText = strid;
    li.appendChild(sml);
    limpar();
}   

//função responsavel por criar a hora dentro do li
btnAddTarefa.addEventListener('click', (evento)=>{
    criarTarefa(input.value)   
});
document.addEventListener('keypress', (e)=>{
    if(e.keyCode ==  13){
        criarTarefa(input.value)
    }
});