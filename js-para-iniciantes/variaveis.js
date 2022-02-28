// VARIÁVEIS
var nome = "Romualdo";
let idade = 30;
const possuiFaculdade = true;

//VÍRGULA
var nome = "Romualdo",
  idade = 30,
  possuiFaculdade = true;

//SEM VALOR
var precoAplicativo; // retorna undefined

//HOISTING
console.log(nome);
var nome = "Romualdo"; //retorna undefined

var profissao = "Programador";
console.log(profissao); // retorna Programador

//MUDAR O VALOR ATRÍBUIDO
var idade = 30;
idade = 29;

let preco = 50;
preco = 25;

const possuiFaculdade = true;
possuiFaculdade = false; // retorna um erro
