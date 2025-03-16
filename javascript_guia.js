// ========== VARIÁVEIS ==========
// Formas de declarar variáveis
let idade = 25;        // Pode ser alterada, escopo de bloco
const nome = "João";   // Não pode ser alterada
var antiga = "valor";  // Antiga, não recomendada (escopo global)

// ========== FUNÇÕES ==========
// 1. Função Tradicional
function soma(a, b) {
    return a + b;
}

// 2. Function Expression
const multiplicar = function(a, b) {
    return a * b;
};

// 3. Arrow Function
const dividir = (a, b) => a / b;

// 4. Arrow Function com múltiplas linhas
const calcular = (a, b) => {
    let resultado = a + b;
    return resultado * 2;
};

// ========== ARRAYS ==========
// 1. Criação básica
const frutas = ["maçã", "banana", "laranja"];

// 2. Array construtor
const numeros = new Array(1, 2, 3);

// 3. Array com spread operator
const novasFrutas = [...frutas, "manga"];

// Métodos de Array
const numeros2 = [1, 2, 3, 4, 5];

// Map - transforma cada elemento
const dobrados = numeros2.map(num => num * 2);

// Filter - filtra elementos
const maioresQueDois = numeros2.filter(num => num > 2);

// Reduce - reduz array a um valor
const soma2 = numeros2.reduce((acc, curr) => acc + curr, 0);

// ========== OBJETOS ==========
// 1. Objeto Literal
const pessoa = {
    nome: "Maria",
    idade: 30,
    saudacao() {
        return `Olá, me chamo ${this.nome}`;
    }
};

// 2. Constructor Function
function Carro(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    this.ligar = function() {
        return "Carro ligado!";
    };
}

// 3. Class (ES6+)
class Animal {
    constructor(nome, especie) {
        this.nome = nome;
        this.especie = especie;
    }

    fazerSom() {
        return "Som genérico";
    }
}

// Herança com Class
class Cachorro extends Animal {
    fazerSom() {
        return "Au au!";
    }
}

// ========== ASYNC/AWAIT ==========
// Promise
const minhaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Sucesso!");
    }, 2000);
});

// Async/Await
async function buscarDados() {
    try {
        const resultado = await minhaPromise;
        return resultado;
    } catch (erro) {
        console.error(erro);
    }
}

// ========== DESTRUCTURING ==========
// Em objetos
const { nome: nomePessoa, idade: idadePessoa } = pessoa;

// Em arrays
const [primeiro, segundo] = frutas;

// ========== REST/SPREAD ==========
// Rest em funções
function somarTodos(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

// Spread em objetos
const pessoaAtualizada = { ...pessoa, profissao: "dev" };

// ========== TEMPLATE LITERALS ==========
const message = `
    Olá ${nomePessoa},
    Você tem ${idadePessoa} anos.
`;

// ========== OPERADORES TERNÁRIOS ==========
const status = idade >= 18 ? "Adulto" : "Menor";

// ========== MÉTODOS DE STRING ==========
const texto = "JavaScript é incrível";
const maiusculas = texto.toUpperCase();
const incluiJS = texto.includes("JavaScript");
const partido = texto.split(" ");

// Exportando para usar em outros arquivos
module.exports = {
    soma,
    multiplicar,
    dividir,
    pessoa,
    Carro,
    Animal,
    buscarDados
};