function addTarefas() {

    const taskInput = document.getElementById('taskInput'); //obtém o input de tarefas
    const taskList = document.getElementById('taskList'); //obtém a lista de tarefas
    const taskText = taskInput.value.trim(); //obtém o valor do input e remove espaços de tarefa
    if (taskText !== '') { // verifica-se se o texto da tarefa não está vazio 

        const ListItem = document.createElement('li'); //cria um novo item 
        ListItem.textContent = taskText; //define o texto 

        const deleteBTN = document.createElement('span'); //cria o botão de apagar 
        deleteBTN.textContent = ' X '; //define o texto do botão 
        deleteBTN.className = 'delete'; //define a classe CSS para o botão

        deleteBTN.onclick = function () { //adiciona um evento de clique para apagar a tarefa
            taskList.removeChild(ListItem); //remove o item da lista 
        };

        ListItem.appendChild(deleteBTN); // adiciona o botão de delete ao item da lista
        taskList.appendChild(ListItem); // adiciona o item à lista
        taskInput.value = ''; //limpa o input de tarefas

    }

    //adiciona um evento de tela ao input de tarefas 
    taskInput.addEventListener('keypress', function (e){
        if (e.key === 'Enter') { // verifica se a tecla pressionada é "Enter"
            addTarefas(); //chama a função para adicionar a tarefa 
        }
    });

}
