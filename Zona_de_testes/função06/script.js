var idade = document.getElementById('iidade')
var res = document.getElementById('res')

function verificar(idade) {
    var idadeValor = Number(idade.value)
    if (idadeValor >= 18) {
        return true
    } else {
        return false
    }
}



document.getElementById('verificar').addEventListener('click', function () {
    if (verificar(idade)) {
        res.innerHTML = 'Maior de idade'
    } else {
        res.innerHTML = ('Menor de idade')
    }
})