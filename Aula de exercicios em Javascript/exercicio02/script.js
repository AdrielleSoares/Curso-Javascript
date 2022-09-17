function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = window.document.getElementById('imagem')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[erro] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByClassName('radsex')
        var idade = ano - Number(fano.value)
        if (idade >= 0 && idade < 10) {
            img.src = 'imagem/meninacrianca.jpg'
        } else if (idade < 21) {
            img.src = 'imagem/meninajovem.jpg'
        } else if (idade < 50) {
            img.src = 'imagem/mulheradulta.jpg'
        } else {
            img.src = 'imagem/mulheridosa.jpg'
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Voce tem ${idade} anos.`
}    