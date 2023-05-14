function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique seus dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
       // res.innerHTML = `Idade calculada: ${idade}`
       genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked){
           genero = 'Homem'
           if (idade >= 0 && idade < 10){
               //crianca
               img.setAttribute('src', 'homem.bebe.jpg')
           }else if (idade < 21){
               //jovem
               img.setAttribute('src', 'homem.jovem.jpg')
           }else if (idade < 50){
               //adulto
               img.setAttribute('src', 'homem.adulto.jpg')
           }else {
               //idoso
               img.setAttribute('src', 'homem.idoso.jpg')
           }
       }else if (fsex[1].checked){
           genero = 'Mulher'
           if (idade >= 0 && idade < 10){
            //crianca
            img.setAttribute('src', 'mulher.bebe.jpg')
        }else if (idade < 21){
            //jovem
            img.setAttribute('src', 'mulher.jovem.jpg')
        }else if (idade < 50){
            //adulto
            img.setAttribute('src', 'mulher.adulta.jpg')
        }else {
            //idoso
            img.setAttribute('src', 'mulher.idosa.jpg')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }
}