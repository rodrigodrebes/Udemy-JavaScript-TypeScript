/*
Rodrigo Soares tem 25 anos, pesa 74 kg
tem 1.75 de altura e seu IMC é de ?
Rodrigo Soares nasceu em 1997
*/
const nome = 'Rodrigo';
const sobrenome = 'Soares';
const idade = 25;
const peso = 74;
const alturaEmM = 1.75; // Corrigido para metros (ao invés de cm)
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;
 
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;
 
// template strings
 
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kgs`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);