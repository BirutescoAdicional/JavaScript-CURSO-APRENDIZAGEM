var nome = document.getElementById('inome')
var idade = document.querySelector('input#iidade')
var res = document.getElementById('res')

function calcular(nome, idade) {
    nome = nome.value
    idade = Number(idade.value)
    return { nome, idade }
}

document.getElementById('ibotao').addEventListener('click', function() {
    var dados = calcular(nome, idade)
    res.innerHTML = `Seu nome é ${dados.nome} e você tem ${dados.idade} anos.`
})