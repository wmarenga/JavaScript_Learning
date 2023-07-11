function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <10) {
                // Criança
                img.setAttribute('src', 'meninobaby.png')
            } else if (idade >= 10 && idade < 21) {
                // Adolescente
                img.setAttribute('src', 'Adolescentehomem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'velho.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <10) {
                // Criança
                img.setAttribute('src', 'meninababy.png')
            } else if (idade >= 10 && idade < 21) {
                // Adolescente
                img.setAttribute('src', 'adolescentemulher.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulta.png')
            } else {
                // Idoso
                img.setAttribute('src', 'velha.png')
            }
        }
        res.style.textAlign = 'center' 
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}