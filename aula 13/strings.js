// Strings são indexadas (iteráveis) - 01234567...
// Zero é o primeiro elemento

let umaString = 'Um Texto'

console.log(umaString.length); // exibe o tamanho da String

console.log(umaString[4]); // exibe a string "e"

console.log(umaString.charAt(6)); // exibe a string "t"

console.log(umaString.concat(' e', ' um', ' lindo', ' dia'));
console.log(`${umaString} e um lindo dia`);

console.log(umaString.indexOf('Texto')); // descobre em qual índice começa a palavra Texto

console.log(umaString.search(/x/)); // descobre em qual índice começa a palavra Texto

console.log(umaString.replace('Um', 'Outro')); // muda a string escolhida por outra

let outraString = "O rato roeu a roupa do Rei"

console.log(outraString.slice(2, 6)); // pega só um pedaço da string