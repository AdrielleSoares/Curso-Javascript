function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        img.src = 'imagem/bomdia.jpg'
        document.body.style.background = '#febe07'
    } else if(hora >= 12 && hora < 18) {
        img.src = 'imagem/boatarde.jpg'
        document.body.style.background = '#fc7900'
    } else {
        img.src = 'imagem/boanoite.jpg'
        document.body.style.background = '#0a617c'
    }
}
