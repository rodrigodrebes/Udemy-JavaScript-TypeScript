/*****
* Não podemos criar CONSTANTES com palavras reservadas (como let, console, etc.) 
 
* Devem ter nomes significados (nomeCliente, idadePadrão, etc.)

* NÃO PODE MODIFICAR O VALOR DE UMA CONSTANTE

* Não podemos criar CONSTANTES que comecem com número(1cliente), nem com espaços(nome cliente) ou traços(nome-cliente))

*Utilizamos camelCase (nomeCompletoDoCliente)

*NÃO UTILIZE VAR, UTILIZE CONST.

******/

const primeiroNumero = 5;
const segundoNumero = 3;
const conta = primeiroNumero * segundoNumero;
const conta2 = conta * 2;
console.log(conta);
console.log(conta2);

console.log(typeof(primeiroNumero)); // nos diz qual o tipo (str, num) de variável
