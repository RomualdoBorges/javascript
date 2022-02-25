// Você pode somar uma string e assim concatenar as palavras.
var nome = "André";
var sobrenome = "Rafael";
var nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto); // Retorna "André Rafael"

// Você pode somar números com strings, o resultado final é sempre uma string.
var gols = 1000;
var frase = "Romário fez " + gols + " gols";
console.log(nomeCompleto); // Retorna "Romário fez 1000 gols"

// Template Strings
var gols = 1000;
var frase2 = `Romário fez ${gols} gols`;
console.log(frase2); // Retorna "Romário fez 1000 gols"
