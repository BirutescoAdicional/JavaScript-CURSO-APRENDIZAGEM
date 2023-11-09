var nome = document.getElementById('inome')
var res = document.querySelector('div#res')

function confirmacao() {
    var valor = nome.value
    return valor
}

document.getElementById('confirmar').addEventListener('click', function () {
    var valor = confirmacao()
    res.innerHTML = `Olá, ${valor}.`
})