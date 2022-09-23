/*****
* Não podemos criar variáveis com palavras reservadas (como let, console, etc.) 
 
* Devem ter nomes significados (nomeCliente, idadePadrão, etc.)

* Não podemos criar variáveis que comecem com número(1cliente), nem com espaços(nome cliente) ou traços(nome-cliente))

*Utilizamos camelCase (nomeCompletoDoCliente)

*NÃO UTILIZE VAR, UTILIZE LET.

******/

let nome = 'Rodrigo'; // cria uma variável string

console.log(nome, 'nasceu em 1997');
console.log('Em 2000', nome, 'tinha 3 anos');
console.log('Em 2015', nome, 'se mudou para Porto Alegre');  
console.log('Em 2019', nome, 'se formou');

nome = 'João' // modifiquei o valor da variável, daqui para baixo ela se altera
console.log(nome);