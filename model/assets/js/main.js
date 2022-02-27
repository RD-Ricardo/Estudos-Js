const inputTarefa = document.querySelector('.input-nova-tarefa');
const btnTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');

//funcao para criar os li
function criarLi(){
    const li = document.createElement('li');
    return li;
}
function limpar(){
    inputTarefa.value = '';
    inputTarefa.focus();
}
function criarBtnApagar(li){
    li.innerText += ' ';
    const btnApagar =  document.createElement('button');
    btnApagar.innerText = 'Apagar';
    btnApagar.setAttribute('class', 'apagar');
    li.appendChild(btnApagar);
}

inputTarefa.addEventListener('keypress', (e)=>{
   if(e.keyCode == 13){
    
    if(!inputTarefa.value){
        return
    };
        criarTarefa(inputTarefa.value);
   }    
});

function criarTarefa(textoInput){
  const li = criarLi();
  li.innerHTML = textoInput;
  tarefas.appendChild(li);
  limpar();
  criarBtnApagar(li);
  salvarTarefa();
}

btnTarefa.addEventListener('click', (evento)=>{    
    if(!inputTarefa.value){return};
    criarTarefa(inputTarefa.value);
    
})

document.addEventListener('click', (e)=>{
    const el =  e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefa();        
    }
});

function salvarTarefa(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas){
       let tarefaTexto = tarefa.innerText;
       tarefaTexto = tarefaTexto.replace('apagar',' ').trim();
       listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJson = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas' , tarefasJson);
}

function addTarefasSalvas(){
    const taferas = localStorage.getItem('tarefas');
    const listaTarefas = JSON.parse(taferas);

    for(let tarefa of listaTarefas){
        criarTarefa(tarefa);
    }
}
addTarefasSalvas();