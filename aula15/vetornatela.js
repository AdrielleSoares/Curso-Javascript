let valores = [0, 1, 7, 4, 2, 9]

/* valores.sort() // coloca em ordem crescente
valores.push(8) //acrescenta 1 posicao com o numero colocado no ()
console.log(valores.length) // informa o tamanho do array ou vetor

for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}
*/

//console.log(valores)

valores.sort()

for(let pos in valores) { // para cada posicao em valores ...
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}