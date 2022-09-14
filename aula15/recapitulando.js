let valores = [5, 6, 8, 9, 5]

console.log(valores)

console.log(`Os valores contido no array sao ${valores}`)
console.log(valores.length)
valores.sort()
console.log(valores)

let pos = valores.indexOf(9)
if(pos == -1) {
    console.log(`nao existe no array`)
} else {
    console.log(`o numero 9 esta na posicao ${pos}`)
}