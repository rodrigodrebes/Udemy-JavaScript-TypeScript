function saudacao(nome) {
  return `Bom dia, ${nome}` // função que retorna valor
}

saudacao('Luiz') // não retorna nada
saudacao('Maria')

const funcao = saudacao('Rodrigo') // designa uma variavel com parâmetros de função
console.log(funcao) // retorna valor

function soma(x, y) {
  const resultado = x + y
  return resultado
}
console.log(soma(3, 5))
