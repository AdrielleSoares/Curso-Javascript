//var agora = new Date()
//var hora = agora.getHours() pegar a  hora atual
var hora = 13

console.log(`Agora sao exatamente ${hora} horas.`)
if(hora < 12) {
    console.log('Bom dia!')
} else if(hora < 18) {
    console.log('Boa Tarde!')
} else if(hora >+ 18) {
     console.log('Boa Madrugada!')
}