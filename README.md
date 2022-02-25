# Capítulo 2 [Estrutura léxica](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Lexical_grammar)

A estrutura léxica de uma linguagem de programação é o conjunto de regras elementares que especificam o modo de escrever programas nessa linguagem.

## 2.1 Conjunto de Caracteres

Os programas JavaScript são escritos com o conjunto de caracteres [Unicode](https://www.devmedia.com.br/unicode-conceitos-basicos/25169).

### 2.1.1 Deferenciação de maiúsculas e minúsculas

JavaScript é uma linguagem que diferencia letras maiúsculas de minúsculas. Dessa forma, `online`, `Online`, `OnLine` e `ONLINE` são quatro nomes de variável distintos.

### 2.1.2 Espaços em branco, quebras de linha

Espaços em branco ajundam na legibilidade do código e separam os símbolos um do outro. Estes caracteres normalmente não são funcionais no código.

## 2.2 Comentários

JavaScript aceita dois estilos de [comentários](https://github.com/RomualdoBorges/javascript/blob/main/estrutura-lexica/comentario.js).

## 2.3 Literais

Um _literal_ é um valor de dados que aparece diretamente em um programa. São eles:

- [Números](https://github.com/RomualdoBorges/javascript/blob/main/estrutura-lexica/numeros.js)
- [String](https://github.com/RomualdoBorges/javascript/blob/main/estrutura-lexica/string.js)
- [Booleano](https://github.com/RomualdoBorges/javascript/blob/main/estrutura-lexica/booleano.js)
- [Null](https://github.com/RomualdoBorges/javascript/blob/main/estrutura-lexica/null.js)

## 2.4 Identificadores e palavras reservadas

Em JavaScript, um _identificador_ é utilizado para dar nome a variáveis e funções e fornecer rótulos para certos laços no código.

Um [identificador](https://github.com/RomualdoBorges/javascript/blob/main/estrutura-lexica/identificador.js) JavaScript deve começar com uma letra, um sublinha (\_) ou um cifrão ($).

### 2.4.1 [Palavras reservadas](https://www.w3schools.com/js/js_reserved.asp)

JavaScript reserva vários identificadores como palavras-chave da própria linguagem. Você não pode usar essas palavras como identificadores.

## 2.5 Pontos e vírgulas opcionais

O JavaScript utiliza o ponto e vírgula `;` para separar instruções.

Você normalmente pode omitir o ponto e vírgula entre duas instruções, caso essas instruções sejam escritas em linhas separadas.

Muitos programadores JavaScript utilizam ponto e vírgula para marcar explicitamente os fiais de instruções, mesmo onde eles não são obrigatórios.

# Capítulo 3 Tipos, valores e variáveis

Os _tipos_ de JavaScript podem ser divididos em duas categorias:

- Tipos _primitivos_ (números, strings, booleanos, null e undefined);
- Tipos de _objeto_. (tudo que não for primitivos)

Um [_objeto_]() é um conjunto de _propriedades_

## 3.1 Números

### 3.1.1 Literais inteiros

### 3.1.2 Literais em ponto flutuante

### 3.1.3 Aritmética em JavaScript

### 3.1.4 Ponto flutuante binário e erros de arredondamento

### 3.1.5 Datas e horas

## 3.2 Texto

### 3.2.1 Strings literais

### 3.2.2 Sequências de escape em string literais

### 3.2.3 Trabalhando com strings

### 3.2.4 Comparação de padrões

## 3.3 Valores booleanos

## 3.4 null e undefined

## 3.5 O objeto global

## 3.6 Objetos wrapper

## 3.7 Valores primitivos imutáveis e refeências de objeto mutáveis

## 3.8 Conversões de tipo

### 3.8.1 Conversões e igualdade

### 3.8.2 Conversões explícitas

### 3.8.3 Conversões de objeto para valores primitivos

## 3.9 Declaração de veriável

### 3.9.1 Declaração repetidas e omitidas

## 3.10 Escopo de variável

### 3.10.1 Escopo de função e içamento

### 3.10.2 Variáveis como propriedades

### 3.10.3 O encadeamento de escopo
