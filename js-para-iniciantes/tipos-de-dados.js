//7 TIPOS DE DADOS
var nome = "Romualdo"; // String
var idade = 30; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol(); // Symbol
var novoObjeto = {}; // Object

//VERIFICAR TIPO DE DADO
var nome = "Romualdo";
console.log(typeof nome); // retorna string

//STRING
var nome = "Romualdo";
var sobrenome = "Borges";
var nomeCompleto = nome + " " + sobrenome; // retorna "Romualdo Borges"

var gols = 1000;
var frase = "Romário fez " + gols + " gols";

//ASPAS DUPLAS, SIMPLES E TEMPLATE STRING
('JavaScript é "super" fácil');
("JavaScript é 'super' fácil");
`JavaScript é "super" fácil`;

//TEMPLATE STRING
var gols = 1000;
var frase2 = `Romário fez ${gols} gols`;
