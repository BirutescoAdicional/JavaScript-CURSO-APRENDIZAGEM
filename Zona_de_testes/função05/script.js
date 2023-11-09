var num = document.getElementById('inum');
var res = document.getElementById('res');

function ehPar(num) {
    num = Number(num.value);
    return num % 2 === 0;
}

function calcular() {
    res.innerHTML = '';

   if (num.value == 0) {
    window.alert('Preencha o espaço vazio')
   } else {
    if (ehPar(num)) {
        res.innerHTML = 'Par';
    } else {
        res.innerHTML = 'Ímpar';
    }
}
}
