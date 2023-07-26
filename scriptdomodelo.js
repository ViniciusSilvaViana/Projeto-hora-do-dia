function carregar(params) {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 12) {
        img.src = 'manha.png'    
        document.body.style.background = '#fff5c4'  
    }else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#eac0b3'
    }else {
        img.src = 'noite.png'
        document.body.style.background = '#0d3f85'
    }
}

