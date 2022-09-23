const numero = Number(prompt('Digite um número')); //input do valor do usuário
const numeroTitulo = document.getElementById('numero-titulo'); // pega o elemento por ID
const texto = document.getElementById('texto'); // pega o elemento por ID

numeroTitulo.innerHTML = numero;
texto.innerHTML  = '';
texto.innerHTML += `<p> Seu número - 2 é: ${numero - 2}.</p>`;
texto.innerHTML += `<p> A raiz quadrada do seu número é ${numero ** 0.5}. </p>`;
texto.innerHTML += `<p> ${numero} é NaN?: ${Number.isNaN(numero)}. </p>`;
texto.innerHTML += `<p> ${numero} é inteiro?: ${Number.isInteger(numero)}. </p>`;
texto.innerHTML += `<p> Arredondado pra cima: ${Math.floor(numero)}. </p>`;
texto.innerHTML += `<p> Arredondado pra baixo: ${Math.ceil(numero)}. </p>`;
texto.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)}. </p>`;
