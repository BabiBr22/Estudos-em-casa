# 📚 Guia Completo JavaScript - Do Básico ao Avançado

## 📑 Índice
1. [Introdução ao JavaScript](#intro)
2. [Fundamentos Básicos](#fundamentos)
3. [Estruturas de Controle](#estruturas)
4. [Funções](#funcoes)
5. [Arrays e Métodos](#arrays)
6. [Objetos e POO](#objetos)
7. [DOM e Eventos](#dom)
8. [Assincronismo](#async)
9. [ES6+ Features](#es6)
10. [APIs e Fetch](#apis)
11. [Depuração e DevTools](#debug)
12. [Segurança e Performance](#seguranca)
13. [Testes](#testes)
14. [Padrões de Projeto](#patterns)
15. [Projetos Práticos](#projetos)

## <a id="intro"></a>1. 🌟 Introdução ao JavaScript
```javascript
/*
O que é JavaScript?
- Linguagem de programação criada em 1995
- Principal linguagem para web
- Executa no navegador (front-end)
- Também roda no servidor (Node.js)
*/

// Formas de incluir JavaScript:
// 1. Arquivo externo (melhor prática)
<script src="app.js"></script>

// 2. Interno
<script>
    console.log("Olá mundo!");
</script>
```

## 0. Introdução ao JavaScript

### 0.1 O que é JavaScript?
```javascript
/*
JavaScript é uma linguagem de programação:
- Criada em 1995 por Brendan Eich
- Originalmente chamada LiveScript
- Principal linguagem para web
- Roda no navegador (client-side)
- Também roda no servidor (Node.js)
*/

// Como incluir JavaScript em HTML:

// 1. Interno (no arquivo HTML)
<script>
    console.log("Olá, mundo!");
</script>

// 2. Externo (arquivo separado)
<script src="meuScript.js"></script>

// 3. Inline (não recomendado)
<button onclick="alert('Clicou!')">Clique</button>
```

### 0.2 Configuração do Ambiente
```javascript
/*
Ferramentas necessárias:
1. Editor de código (VS Code, Sublime, etc.)
2. Navegador moderno (Chrome, Firefox, etc.)
3. Node.js (opcional, para desenvolvimento)

DevTools do navegador (F12):
- Console: testar código
- Elements: inspecionar HTML/CSS
- Sources: debugar código
- Network: monitorar requisições
*/
```

## 1. Sintaxe Básica Expandida

### 1.1 Convenções de Código
```javascript
// Ponto e vírgula
let nome = "João";     // Recomendado
let idade = 25        // Funciona, mas não recomendado

// Camel Case (padrão JavaScript)
let nomeCompleto = "João Silva";
let calcularTotal = () => {};

// Constantes em maiúsculo
const PI = 3.14159;
const DIAS_SEMANA = 7;

/*
Boas Práticas:
- Use nomes descritivos
- Mantenha consistência
- Comente código complexo
- Evite variáveis globais
*/
```

### 1.2 Tipos de Dados Expandido
```javascript
// Tipos Primitivos
let texto = "string";          // String
let numero = 42;              // Number
let decimal = 3.14;           // Number (float)
let booleano = true;          // Boolean
let nulo = null;              // Null
let indefinido = undefined;   // Undefined
let simbolo = Symbol("id");   // Symbol
let bigInt = 9007199254740991n; // BigInt

// Verificando tipos
typeof texto;      // "string"
typeof numero;     // "number"
typeof nulo;       // "object" (bug histórico)
typeof undefined;  // "undefined"

// Conversão de tipos
Number("42");      // 42
String(42);       // "42"
Boolean(1);       // true
```

## 12. Depuração e DevTools

### 12.1 Console
```javascript
// Diferentes níveis de log
console.log("Informação normal");
console.info("Informação");
console.warn("Aviso");
console.error("Erro");

// Console avançado
console.table(['a', 'b', 'c']); // Mostra em tabela
console.time('timer');          // Inicia timer
console.timeEnd('timer');       // Finaliza timer
```

### 12.2 Debugging
```javascript
// Usando debugger
function encontrarBug(x) {
    debugger;  // Pausa execução aqui
    return x * 2;
}

// Try-catch expandido
try {
    // Código que pode dar erro
    throw new Error("Erro personalizado");
} catch (erro) {
    console.error(erro.message);
} finally {
    // Sempre executa
}
```

## 13. Integração com Back-End

### 13.1 REST APIs
```javascript
// Usando fetch para CRUD completo
async function apiCrud() {
    // GET
    const getData = await fetch('/api/dados');
    
    // POST
    const postData = await fetch('/api/dados', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome: 'João' })
    });
    
    // PUT
    const putData = await fetch('/api/dados/1', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome: 'João Atualizado' })
    });
    
    // DELETE
    const deleteData = await fetch('/api/dados/1', {
        method: 'DELETE'
    });
}
```

## 14. Otimização de Performance

### 14.1 Carregamento
```javascript
// Carregamento assíncrono de scripts
<script async src="script.js"></script>
<script defer src="script.js"></script>

/*
async vs defer:
- async: Carrega em paralelo, executa assim que baixar
- defer: Carrega em paralelo, executa após HTML
*/

// Lazy loading de imagens
<img loading="lazy" src="imagem.jpg">
```

### 14.2 Memoization
```javascript
// Cache de resultados
function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

// Exemplo de uso
const calculoComplexo = memoize((n) => {
    // Simulando cálculo pesado
    return new Promise(resolve => 
        setTimeout(() => resolve(n * 2), 1000)
    );
});
```

[Continua...]

Quer que eu adicione mais alguma seção específica ou detalhe melhor algum dos conceitos?

# 2. Arrays e Métodos de Array

## 2.1 Criação e Manipulação de Arrays
```javascript
// Diferentes formas de criar arrays
const array1 = [1, 2, 3];                  // Literal
const array2 = new Array(4, 5, 6);         // Construtor
const array3 = Array.from("texto");        // A partir de iterável
const array4 = [...array1, ...array2];     // Spread operator

// Métodos básicos
array1.push(4);           // Adiciona no final
array1.pop();            // Remove do final
array1.unshift(0);       // Adiciona no início
array1.shift();          // Remove do início
array1.length;           // Tamanho do array

/*
Por que tantas formas de manipular arrays?
- push/pop: Mais eficientes para final do array
- unshift/shift: Necessários para início, mas menos eficientes
- spread: Moderno e flexível para combinação
*/
```

## 2.2 Métodos de Iteração
```javascript
const numeros = [1, 2, 3, 4, 5];

// forEach - Para cada elemento
numeros.forEach(numero => {
    console.log(numero * 2);
});

// map - Transforma cada elemento
const dobrados = numeros.map(numero => numero * 2);

// filter - Filtra elementos
const pares = numeros.filter(numero => numero % 2 === 0);

// reduce - Reduz a um valor
const soma = numeros.reduce((acumulador, atual) => {
    return acumulador + atual;
}, 0);

// find - Encontra primeiro elemento
const maior3 = numeros.find(numero => numero > 3);

// some/every - Testa condições
const temMaior3 = numeros.some(numero => numero > 3);
const todosMaior0 = numeros.every(numero => numero > 0);

/*
Quando usar cada método?
- forEach: Para executar algo para cada elemento
- map: Para transformar array em novo array
- filter: Para criar subset baseado em condição
- reduce: Para acumular/combinar valores
- find: Para encontrar primeiro elemento que atenda condição
- some/every: Para verificar condições no array
*/
```

# 3. Objetos e Programação Orientada a Objetos

## 3.1 Objetos Básicos
```javascript
// Objeto Literal
const pessoa = {
    nome: "Ana",
    idade: 25,
    saudacao() {
        return `Olá, sou ${this.nome}`;
    }
};

// Acessando propriedades
console.log(pessoa.nome);         // Notação ponto
console.log(pessoa["idade"]);     // Notação colchetes

// Object.keys/values/entries
const chaves = Object.keys(pessoa);
const valores = Object.values(pessoa);
const entradas = Object.entries(pessoa);

/*
Por que diferentes formas de acesso?
- Notação ponto: Mais clara e direta
- Colchetes: Permite uso de variáveis/expressões
- Object métodos: Para manipulação avançada
*/
```

## 3.2 Classes e POO
```javascript
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    fazerSom() {
        return "Som genérico";
    }
}

class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome);
        this.raca = raca;
    }

    fazerSom() {
        return "Au au!";
    }
}

/*
Conceitos de POO:
1. Encapsulamento: Agrupar dados e métodos
2. Herança: Reutilizar código de outra classe
3. Polimorfismo: Mesmo método, comportamentos diferentes
4. Abstração: Simplificar complexidade
*/

// Privado em Classes (ES2022+)
class ContaBancaria {
    #saldo = 0;  // Campo privado

    depositar(valor) {
        this.#saldo += valor;
    }

    getSaldo() {
        return this.#saldo;
    }
}
```

# 4. Async/Await e Promises

## 4.1 Promises Básicas
```javascript
// Criando uma Promise
const minhaPromise = new Promise((resolve, reject) => {
    // Simulando operação assíncrona
    setTimeout(() => {
        const sucesso = true;
        if (sucesso) {
            resolve("Operação concluída!");
        } else {
            reject("Erro na operação!");
        }
    }, 2000);
});

// Usando a Promise
minhaPromise
    .then(resultado => console.log(resultado))
    .catch(erro => console.error(erro));

/*
Por que usar Promises?
- Melhor manejo de operações assíncronas
- Evita callback hell
- Permite encadeamento de operações
- Tratamento de erros mais elegante
*/
```

## 4.2 Async/Await
```javascript
async function buscarDados() {
    try {
        const resultado = await minhaPromise;
        console.log(resultado);
    } catch (erro) {
        console.error(erro);
    }
}

/*
Vantagens do Async/Await:
- Código mais limpo e síncrono
- Melhor tratamento de erros com try/catch
- Mais fácil de debugar
*/

// Promise.all e Promise.race
const promise1 = Promise.resolve(3);
const promise2 = new Promise(resolve => setTimeout(() => resolve(2), 2000));

// Espera todas as promises
Promise.all([promise1, promise2])
    .then(valores => console.log(valores));

// Espera a primeira promise
Promise.race([promise1, promise2])
    .then(valor => console.log(valor));
```

[Continua no próximo post devido ao limite de caracteres...]

Quer que eu continue com as próximas seções (DOM, APIs, Programação Funcional e Padrões de Projeto)?

# 5. DOM (Document Object Model)

## 5.1 Seleção de Elementos
```javascript
// Métodos de seleção
const porId = document.getElementById('meuId');
const porClasse = document.getElementsByClassName('minhaClasse');
const porTag = document.getElementsByTagName('div');
const querySelector = document.querySelector('.classe'); // Primeiro elemento
const querySelectorAll = document.querySelectorAll('.classe'); // Todos elementos

/*
Quando usar cada seletor?
- getElementById: Mais rápido para IDs únicos
- querySelector: Mais flexível, aceita seletores CSS
- getElementsByClassName: Para coleções dinâmicas
*/
```

## 5.2 Manipulação do DOM
```javascript
// Criar elementos
const novoParagrafo = document.createElement('p');
novoParagrafo.textContent = 'Novo texto';
novoParagrafo.innerHTML = 'Texto com <strong>HTML</strong>';

// Adicionar/Remover elementos
elemento.appendChild(novoParagrafo);    // Adiciona ao final
elemento.insertBefore(novo, referencia);// Adiciona antes da referência
elemento.removeChild(filho);            // Remove filho específico
elemento.remove();                      // Remove o próprio elemento

// Modificar atributos
elemento.setAttribute('class', 'novaClasse');
elemento.getAttribute('class');
elemento.removeAttribute('class');
elemento.classList.add('classe');
elemento.classList.remove('classe');
elemento.classList.toggle('classe');

/*
Boas práticas:
- Prefira textContent a innerHTML para texto puro
- Use innerHTML com cuidado (risco XSS)
- Minimize manipulações do DOM (performance)
*/
```

## 5.3 Eventos
```javascript
// Adicionar eventos
elemento.addEventListener('click', function(evento) {
    console.log('Clicou!');
});

// Remover eventos
const handler = (evento) => console.log('Clicou!');
elemento.addEventListener('click', handler);
elemento.removeEventListener('click', handler);

// Eventos comuns
/*
- click: Clique do mouse
- submit: Envio de formulário
- keyup/keydown: Teclas
- mouseover/mouseout: Mouse sobre elemento
- load: Carregamento completo
- change: Mudança em input/select
*/

// Event Delegation
document.addEventListener('click', (e) => {
    if (e.target.matches('.btn')) {
        console.log('Botão clicado!');
    }
});

/*
Por que usar Event Delegation?
- Melhor performance
- Funciona com elementos dinâmicos
- Menos código e memória
*/
```

# 6. APIs e Fetch

## 6.1 Fetch API
```javascript
// Requisição GET básica
fetch('https://api.exemplo.com/dados')
    .then(response => response.json())
    .then(dados => console.log(dados))
    .catch(erro => console.error(erro));

// Requisição POST
fetch('https://api.exemplo.com/dados', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        nome: 'João',
        idade: 30
    })
});

// Usando async/await
async function buscarDados() {
    try {
        const response = await fetch('https://api.exemplo.com/dados');
        const dados = await response.json();
        return dados;
    } catch (erro) {
        console.error(erro);
    }
}

/*
Boas práticas com Fetch:
- Sempre trate erros
- Verifique status da resposta
- Use try/catch com async/await
*/
```

## 6.2 APIs do Navegador
```javascript
// LocalStorage
localStorage.setItem('usuario', 'João');
const usuario = localStorage.getItem('usuario');
localStorage.removeItem('usuario');

// Geolocalização
navigator.geolocation.getCurrentPosition(
    posicao => console.log(posicao.coords),
    erro => console.error(erro)
);

// Clipboard API
navigator.clipboard.writeText('Texto copiado')
    .then(() => console.log('Copiado!'))
    .catch(err => console.error('Erro ao copiar'));

/*
APIs Modernas:
- Web Storage (local/session)
- Geolocation
- Clipboard
- File API
- Web Workers
- Service Workers
*/
```

# 7. Programação Funcional

## 7.1 Conceitos Básicos
```javascript
// Imutabilidade
const original = [1, 2, 3];
const novo = [...original, 4]; // Não modifica original

// Funções Puras
function soma(a, b) {
    return a + b; // Sempre mesmo resultado para mesmos inputs
}

// Composição de Funções
const dobrar = x => x * 2;
const somar10 = x => x + 10;
const resultado = somar10(dobrar(5));

/*
Princípios:
- Imutabilidade
- Funções Puras
- Composição
- First-class functions
- Higher-order functions
*/
```

## 7.2 Métodos Funcionais
```javascript
// Map, Filter, Reduce
const numeros = [1, 2, 3, 4, 5];

const dobrados = numeros
    .map(n => n * 2)
    .filter(n => n > 5)
    .reduce((acc, n) => acc + n, 0);

// Currying
const multiplicar = a => b => a * b;
const dobrar = multiplicar(2);
console.log(dobrar(4)); // 8

/*
Vantagens da Programação Funcional:
- Código mais previsível
- Facilita testes
- Melhor manutenção
- Reutilização de código
*/
```

[Continua...]

Quer que eu prossiga com a seção de Padrões de Projeto e outras práticas avançadas?

# 8. Padrões de Projeto (Design Patterns)

## 8.1 Padrões Criacionais
```javascript
// Singleton
class Database {
    static #instance;
    
    constructor() {
        if (Database.#instance) {
            return Database.#instance;
        }
        Database.#instance = this;
    }
}

// Factory
class UserFactory {
    createUser(type) {
        switch(type) {
            case 'admin':
                return new AdminUser();
            case 'regular':
                return new RegularUser();
        }
    }
}

/*
Quando usar cada padrão?
- Singleton: Quando precisar de única instância (DB, Config)
- Factory: Para criar objetos relacionados sem especificar classe
*/
```

## 8.2 Padrões Estruturais
```javascript
// Module Pattern
const ModulePattern = (function() {
    // Privado
    const privateFn = () => console.log('Privado');
    
    // Público
    return {
        publicFn: () => {
            privateFn();
            console.log('Público');
        }
    };
})();

// Decorator
class Coffee {
    cost() { return 5; }
}

class MilkDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
    
    cost() {
        return this.coffee.cost() + 2;
    }
}

/*
Vantagens:
- Module: Encapsulamento e organização
- Decorator: Adicionar funcionalidades dinamicamente
*/
```

# 9. Testes em JavaScript

## 9.1 Testes Unitários com Jest
```javascript
// Função a ser testada
function somar(a, b) {
    return a + b;
}

// Testes
describe('Função somar', () => {
    test('soma 1 + 2 igual a 3', () => {
        expect(somar(1, 2)).toBe(3);
    });
    
    test('soma com números negativos', () => {
        expect(somar(-1, -2)).toBe(-3);
    });
});

/*
Tipos de Testes:
- Unitários: Funções isoladas
- Integração: Múltiplos componentes
- E2E: Sistema completo
*/
```

## 9.2 Mocks e Spies
```javascript
// Mock de função
const mockCallback = jest.fn();
forEach([1, 2], mockCallback);
expect(mockCallback.mock.calls.length).toBe(2);

// Spy em método
jest.spyOn(console, 'log');
console.log('teste');
expect(console.log).toHaveBeenCalledWith('teste');

/*
Quando usar:
- Mocks: Simular comportamentos
- Spies: Verificar se métodos foram chamados
*/
```

# 10. Segurança e Boas Práticas

## 10.1 Segurança
```javascript
// Sanitização de Input
const input = "<script>alert('xss')</script>";
const sanitized = DOMPurify.sanitize(input);

// CSRF Protection
const token = document.querySelector('meta[name="csrf-token"]').content;
fetch('/api/data', {
    headers: {
        'CSRF-Token': token
    }
});

/*
Principais Ameaças:
- XSS (Cross-Site Scripting)
- CSRF (Cross-Site Request Forgery)
- Injection
- Dados Sensíveis Expostos
*/
```

## 10.2 Performance
```javascript
// Debounce
function debounce(fn, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
}

// Throttle
function throttle(fn, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            fn.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/*
Otimizações Comuns:
- Debounce: Limitar frequência de execução
- Throttle: Garantir taxa máxima de execução
- Lazy Loading: Carregar sob demanda
- Memoization: Cache de resultados
*/
```

# 11. JavaScript Moderno (ES2022+)

## 11.1 Novos Recursos
```javascript
// Optional Chaining
const user = {};
console.log(user?.address?.street); // undefined

// Nullish Coalescing
const value = null ?? "default";

// Private Class Fields
class Example {
    #privateField = 42;
    
    getField() {
        return this.#privateField;
    }
}

/*
Recursos Modernos:
- Optional Chaining (?.)
- Nullish Coalescing (??)
- Private Fields (#)
- Top-level await
- Dynamic import()
*/
```

## 11.2 Modules
```javascript
// Named Exports
export const helper = () => {};
export class Usuario {}

// Default Export
export default class Main {}

// Imports
import { helper, Usuario } from './module.js';
import Main from './main.js';
import * as utils from './utils.js';

/*
Vantagens dos Módulos:
- Código organizado
- Encapsulamento
- Dependências explícitas
- Tree-shaking possível
*/
```

[Continua...]

Este guia cobre os principais aspectos do JavaScript moderno. Quer que eu adicione mais algum tópico específico ou detalhe alguma das seções anteriores?

# 15. JavaScript Básico na Prática

## 15.1 Exercícios Práticos Iniciantes
```javascript
// 1. Calculadora Básica
function calculadora(num1, num2, operacao) {
    switch(operacao) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num1 / num2;
    }
}

// 2. Validador de Senha
function validarSenha(senha) {
    return senha.length >= 8 && 
           /[A-Z]/.test(senha) && 
           /[0-9]/.test(senha);
}
```

## 15.2 Manipulação de Strings
```javascript
// Métodos comuns de string
const texto = "JavaScript é incrível!";

texto.toLowerCase();     // javascript é incrível!
texto.toUpperCase();     // JAVASCRIPT É INCRÍVEL!
texto.trim();           // Remove espaços extras
texto.split(' ');       // ['JavaScript', 'é', 'incrível!']
texto.replace('é', 'é muito'); // JavaScript é muito incrível!
texto.includes('Java'); // true
```

# 16. Projetos Práticos

## 16.1 Todo List Simples
```javascript
class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({
            id: Date.now(),
            text: task,
            completed: false
        });
    }

    toggleTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
        }
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(t => t.id !== id);
    }
}
```

# 17. Dicas de Depuração

## 17.1 Erros Comuns e Soluções
```javascript
// 1. TypeError: Cannot read property 'x' of undefined
// Solução: Usar Optional Chaining
const user = undefined;
console.log(user?.name); // undefined ao invés de erro

// 2. ReferenceError: x is not defined
// Solução: Verificar escopo e declaração
let x;
console.log(typeof x); // 'undefined' ao invés de erro

// 3. Promises não resolvidas
// Solução: Sempre usar .catch() ou try/catch com async/await
fetch('/api/data')
    .then(res => res.json())
    .catch(err => console.error('Erro:', err));
```

# 18. Frameworks e Bibliotecas Populares

## 18.1 Introdução a React
```javascript
// Componente básico React
function Welcome(props) {
    return <h1>Olá, {props.name}</h1>;
}

// Hook básico
function Counter() {
    const [count, setCount] = React.useState(0);
    return (
        <button onClick={() => setCount(count + 1)}>
            Contagem: {count}
        </button>
    );
}
```

Este guia agora inclui:
1. ✅ Fundamentos da linguagem
2. ✅ Manipulação do DOM
3. ✅ Programação assíncrona
4. ✅ Arrays e objetos
5. ✅ Funções e escopo
6. ✅ Classes e OOP
7. ✅ APIs e requisições
8. ✅ Segurança e performance
9. ✅ Testes
10. ✅ Padrões de projeto
11. ✅ JavaScript moderno
12. ✅ Exercícios práticos
13. ✅ Dicas de depuração
14. ✅ Introdução a frameworks

Para um aprendizado efetivo, sugiro:
1. 📚 Estudar cada seção na ordem
2. 💻 Praticar os exemplos
3. 🎯 Fazer projetos pequenos
4. 🔄 Revisar conceitos regularmente
5. 🐛 Aprender com erros

Quer que eu detalhe mais alguma seção específica?