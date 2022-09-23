// Arrays são indexados por elemento
//                 0       1       2
const alunos = ['Luiz', 'Maria', 'João']; // array simples de strings

console.log(alunos); // exibe toda array
console.log(alunos[1]); // acessa somente um índice da array

alunos[0] = 'Davi'; // modifica o valor do índice
alunos[3] = 'Luiza'; // adiciona um valor ao final da Array
console.log(alunos);

console.log(alunos.length); // mostra o tamanho do array

alunos.push('Fábio'); // adiciona um valor ao fim da array
console.log(alunos);

alunos.unshift('Luiza'); // adiciona um valor ao começo da array
console.log(alunos);

alunos.pop(); // remove o último valor da array
console.log(alunos); 

//    delete alunos[1]; // remove um valor específico
//    console.log(alunos); 

console.log(alunos.slice(0, 3)); // mostra só alguns valores da array

console.log(typeof alunos); // array é um OBJETO

