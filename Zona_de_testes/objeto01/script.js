let informações = {};

let res = document.getElementById('res')

function guardar() {
    var nm = document.getElementById('inome')
    var id = document.getElementById('iidade')
    var cid = document.getElementById('icidade')
    var prof = document.querySelector('input#iprofissao')

    informações.nome = nm.value
    informações.cidade = cid.value;
    informações.profissão = prof.value

    var dataNascimento = new Date(id.value);
    var anoAtual = new Date()

    var idade = anoAtual.getFullYear() - dataNascimento.getFullYear();

    informações.idade = idade

    res.innerHTML = `Olá, ${informações.nome}. Você tem ${informações.idade} anos e mora na cidade de ${informações.cidade}. Você trabalha como ${informações.profissão}.`
}