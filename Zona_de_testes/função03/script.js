var num1 = document.getElementById('inum1')
var num2 = document.querySelector('input#inum2')
var res = document.getElementById('res')

function calcular(num1, num2) {
    num1 = Number(num1.value)
    num2 = Number(num2.value)
    var soma = num1 + num2
    soma = Number(soma)
    return {num1, num2, soma}
}



document.getElementById('calcular').addEventListener('click', function () {
    var valores = calcular(num1, num2)
    res.innerHTML = `A soma de ${valores.num1} e ${valores.num2} é igual a ${valores.soma}` 
})