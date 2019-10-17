// const = constante o valor não pode ser reatribuido
// let = o valor pode ser reatribuido

// A mutação pode acontecer numa constante, voce muda o valor da constante atraves do objeto.
// const usuario = { nome: "Natanael" };
// usuario.nome = "Diego";
// console.log(usuario);

// import { FazSoma } from "./funcoes";

// console.log(FazSoma(5, 5));

alert("sdfasd");

// Classes
// class List {
//   constructor() {
//     this.data = [];
//   }

//   add(data) {
//     this.data.push(data);
//     console.log("Resultado: ", this.data);
//   }
// }

// class TodoList extends List {
//   constructor() {
//     super();
//     this.usuario = "Diego";
//   }

//   mostraUsuario() {
//     console.log(this.usuario);
//   }
// }

// var MinhaList = new TodoList();

// document.getElementById("novotodo").onclick = function() {
//   MinhaList.add("Novo todo");
// };

// MinhaList.mostraUsuario();

// // Funções do ES6
// const arr = [1, 3, 4, 5, 8, 9];

// // Função map - percorre o vetor para retornar uma nova informação
// const newArr = arr.map(function(item, index) {
//   return item + index;
// });

// console.log(newArr);

// // Função reduce - forma de consumir o vetor e transformar em uma unica informação (geralmente um numero)
// const sum = arr.reduce(function(total, next) {
//   return total + next;
// });

// console.log(sum);

// // Função filter - usada para filtrar o array
// const filter = arr.filter(function() {
//   return item % 2 === 0;
// });

// console.log(filter);

// // Find - verificar se existe a informação dentro do array
// const find = arr.find(function() {
//   return item === 4;
// });

// console.log(find);

// // Arrows functions
// const newArr1 = arr.map(item => item + 2);

// const teste = () => {
//   return "teste";
// };

// // funciona
// const teste1 = () => [1, 2, 3];

// // não funciona
// const teste2 = () => {
//   nome: "Natan";
// };

// // funciona com objeto
// const teste3 = () => ({ nome: "Natan" });

// console.log("teste");

// // Definindo Valores padrão
// const soma = (a = 3, b = 6) => a + b;

// console.log(soma(1));
// console.log(soma());

// // Desestruturação de objetos
// const usuario = {
//   nome: "Natanael",
//   idade: 35,
//   endereco: {
//     cidade: "Gama",
//     estado: "DF"
//   }
// };

// const { nome, idade } = usuario;

// function mostraNome({ nome }) {
//   console.log(nome);
// }

// mostraNome(usuario);
// console.log(nome, idade);

// // Operadores rest/spread
// // utiliza os tres pontos um ao lado do outro

// // REST - pega o resto de uma desetruturação ou de uma passagem de paramentros
// function somaRest(a, b, ...params) {
//   return params;
// }

// console.log(somaRest(1, 3, 4, 4, 5, 6, 7));

// // SPREAD - propaga ou repassa as informções de um array para um outra array

// // Unir arrays
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = [...arr1, ...arr2];

// console.log(arr3);

// // Trocar um valor de variavel
// const usuario1 = {
//   nome: "Natan",
//   idade: 35,
//   empresa: "WebSystem Infor"
// };

// const usuario2 = { ...usuario1, nome: "Gabriel" };

// console.log(usuario2);

// // Template literals - incluir variaveis dentro de strings
// const nome1 = "Natan";
// const idade1 = 35;

// console.log(`Meu nome é ${nome1} e tenho ${idade1} anos.`);

// // Object Short Syntax
// const usuario10 = {
//   nome,
//   idade,
//   empresa: "WebSystem Infor"
// };

// console.log(usuario);
