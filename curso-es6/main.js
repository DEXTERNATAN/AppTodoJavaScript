// const = constante o valor não pode ser reatribuido
// let = o valor pode ser reatribuido

// A mutação pode acontecer numa constante, voce muda o valor da constante atraves do objeto.
// const usuario = { nome: "Natanael" };
// usuario.nome = "Diego";
// console.log(usuario);

// Classes
class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log("Resultado: ", this.data);
  }
}

class TodoList extends List {
  constructor() {
    super();
    this.usuario = "Diego";
  }

  mostraUsuario() {
    console.log(this.usuario);
  }
}

var MinhaList = new TodoList();

document.getElementById("novotodo").onclick = function() {
  MinhaList.add("Novo todo");
};

MinhaList.mostraUsuario();

// Funções do ES6
const arr = [1, 3, 4, 5, 8, 9];

// Função map -
const newArr = arr.map(function(item, index) {
  return item + index;
});

console.log(newArr);

// Função reduce -
const sum = arr.reduce(function(total, next) {
  return total + next;
});

console.log(sum);

// Função filter - usada para filtrar o array
const filter = arr.filter(function() {
  return item % 2 === 0;
});

console.log(filter);

// Find - verificar se existe a informação dentro do array
const find = arr.find(function() {
  return item === 4;
});

console.log(find);
