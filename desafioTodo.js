var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var tarefas = JSON.parse(localStorage.getItem("list_tarefas")) || [];

function renderTodos() {
  listElement.innerHTML = "";
  for (tarefa of tarefas) {
    addItem(tarefa);
  }
}

renderTodos();

// Adicionando items a lista
function addItem(tarefa) {
  var tarefaElement = document.createElement("li");
  var tarefaText = document.createTextNode(tarefa);

  var linkElement = document.createElement("a");
  linkElement.setAttribute("href", "#");

  var pos = tarefas.indexOf(tarefa);
  linkElement.setAttribute("onclick", "removerTarefas( " + pos + ")");

  var linkText = document.createTextNode("Excluir");

  linkElement.appendChild(linkText);

  tarefaElement.appendChild(tarefaText);
  tarefaElement.appendChild(linkElement);
  listElement.appendChild(tarefaElement);
}

// Adiciona tarefa
function addTarefa() {
  var textTarefa = inputElement.value;
  tarefas.push(textTarefa);
  inputElement.value = "";
  renderTodos();
  saveToStorage();
}

// Adiciona Registros ao clicar no botão
buttonElement.onclick = addTarefa;

// Remove registros ao clicar no link
function removerTarefas(pos) {
  tarefas.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("list_tarefas", JSON.stringify(tarefas));
}
