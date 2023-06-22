let numeros = [2, 8, 13]
numeros[3] = 1
numeros.push(5)
numeros.length /*não usa parênteses no final pois 'lenght' não é um método, mas sim um atributo*/
numeros.indexOf(8)
numeros.sort()

console.log(numeros)
for (let c=0; c < numeros.length; c++) {
    console.log(numeros[c])
}
for (let c in numeros) { /*esse for só funciona para array (vetores) e objects (objetos)*/
    console.log(numeros[c])
}