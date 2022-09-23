let num1 = 1500.5959898 //número
let num2 = 2.5 //número

console.log(num1.toString()+num2); // transforma temporariamente o num para string

console.log(num1.toFixed(2)); //deifnição das casas decimais

let temp = num1 * "olá"
console.log(Number.isNaN(temp)); // solicita se a variável é não-número (NaN)
console.log(Number.isInteger(temp)); //solicita se a variável é um número inteiro

num3 = 0.7
num4 = 0.1
num3 += num4
num3 += num4
num3 += num4

console.log(num3.toFixed(2));