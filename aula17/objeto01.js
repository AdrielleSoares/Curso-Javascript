let amigo = {nome: 'jose', sexo:'M', peso: 85.4, engordar(p=0){
    console.log('engordou')
    this.peso += p //this referencia de objeto
}}

console.log(amigo)

amigo.engordar(1)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)