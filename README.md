# Capítulo 1 JavaScript Completo E6+

## 1.1 Linguagem

_JavaScript_ é a linguagem de programação da Web, ela faz parte da tríade de tecnologias que todos os desenvolvedores Web devem conhecer:

- _HTML_, para especificar o conteúdo de páginas Web;
- _CSS_, para especificar a apresentação dessas páginas;
- _JavaScript_, para especificar o comportamento delas.

JavaScript é uma [linguagem _interpretada_](https://www.freecodecamp.org/news/compiled-versus-interpreted-languages/) - o código é executado de cima para baixo e o resultado da execução do código é imediatamente retornado.

## 1.2 Aplicações

O JavaScript foi criado para ser utilizado para o _Front End_, porém é possível utilizá-lo no _Back End_ e em _Jogos_.

Veja abaixo as aplicações:

> Front End

**Adicionar comportamento interativo nas páginas da web**: O JS permite que pessoas usuárias interajam com uma página e a torne muito mais dinâmica para o usuário.

**Criar páginas na web e apps**: Existem diversos tipos de frameworks que auxiliam na criação de aplicações web, aplicativos mobile e deixam o seu desenvolvimento mais prático e rápido.

> Back End

**Construir web servers e desenvolver aplicações**: Além de usar o JavaScript para a parte front-end, é possível usá-lo para construir a estrutura backend e servidores, com o uso do Node.js.

> Jogos

**Desenvolvimento de Jogos**: É possível desenvolver jogos que rodem nos browsers. Inclusive, é uma ótima forma de aprender a linguagem de um forma divertida e existem diversos tutoriais que já usam jogos para explicar JS.

## 1.3 JavaScript vs Java

A não ser pela semelhança sintática superficial, _JavaScript_ é completamente diferente da linguagem de programação _Java_.

[Veja mais](https://www.java.com/pt-BR/download/help/java_javascript_pt-br.html#:~:text=Java%20cria%20aplica%C3%A7%C3%B5es%20executadas%20em,Eles%20requerem%20plug%2Dins%20diferentes.)

## 1.4 Explorando o JavaScript

É possível incorporar código JavaScript entre marcas [`<script>`](https://github.com/RomualdoBorges/javascript/blob/main/javascript-para-iniciantes/exemplos/index.html) em arquivos HTML e, quando o navegador carregar o arquivo, vai executar o código.

Todo navegador Web contém um _interpretador_ de JavaScript e normalmente, podemos encontrar uma _ferramenta de desenvolvedores_ neles. Um painel ou janela típica de “ferramentas para desenvolvedor” contém várias guias. Uma das guias é o _“console JavaScript”_ que permite digitar linhas de código JavaScript e testá-las. Para ativar um console apertamos a tecla F12.

Existe uma API de console simples, implementada de forma portável pelos navegadores modernos. Você pode usar a função [`console.log()`](https://github.com/RomualdoBorges/javascript/blob/main/javascript-para-iniciantes/exemplos/script.js) para exibir uma saída simples no console.

# Capítulo 2 JavaScript para Iniciantes

## 2.1 Variáveis

Você usa _variáveis_ como nomes símbolicos para guardar dados na memória. O nome das variáveis, chamados de [_indicadores_](https://github.com/RomualdoBorges/javascript/blob/main/javascript-para-iniciantes/exemplos/indicadores.js), obedecem determinadas regras:

- Os nomes podem iniciar com $, underline (\_), ou letras;

- Case sensitive, ou seja, a varíavel `nome` é diferente da `Nome`;

- Não utilizar [palavras reservadas](https://www.w3schools.com/js/js_reserved.asp);

- Camel case, ou seja, é comum nomearmos assim: `abrirModal`.

### 2.2.1 Declarações de Variáveis

Existem três tipos de _declarações_ em JavaScript:

- `var` - Declara uma variável;
- `let` - Declara uma variável de escopo de bloco;
- `const` - Declara uma constante de escopo de bloco, apenas de leitura.

Podemos utilizar a vírgula para criar mais de uma variável, sem repetir as declarações.

Podemos declarar uma variável sem atribuir valor inicialmente.

[Exemplos]()

### 2.2.2 Mudar o valor atribuído

É possível mudar os valores atribuídos a variáveis declaradas com `var` e `let`. Porém não é possível modificar valores das declaradas com `const`.

[Exemplos]()

### 2.2.3 Hoisting

Quando o JavaScript compila todo seu código, todas as declarações de variáveis usando `var` são levadas ao topo de suas funções/escopo local (se declaradas dentro de uma função), ou ao topo do escopo global (se declaradas fora de uma função) independentemente de onde a declaração foi feita.

[Saiba mais.](https://javascript.plainenglish.io/https-medium-com-javascript-in-plain-english-what-is-hoisting-in-javascript-a63c1b2267a1)

### Exercícios

        // Declarar uma variável com o seu nome

        // Declarar uma variável com a sua idade

        // Declarar uma variável com a sua comida
        // favorita e não atribuir valor

        // Atribuir valor a sua comida favorita

        // Declarar 5 variáveis diferentes sem valores

[Resolução]()
