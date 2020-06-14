const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(texto.match(/r/gi))
console.log(texto.match(/^r/gi)) // ^ início de linha/string
console.log(texto.match(/r$/gi)) // $ fim de linha/string

console.log(texto.match(/^r.*r$/gi)) // problema do dotall