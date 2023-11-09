var nota1 = document.querySelector('input#inota1');
var nota2 = document.querySelector('input#inota2');
var nota3 = document.querySelector('input#inota3');
var res = document.getElementById('res');


document.getElementById('calcular').addEventListener('click', function () {
    var valor1 = Number(nota1.value);
    var valor2 = Number(nota2.value);
    var valor3 = Number(nota3.value);

    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
        window.alert('Por favor, preencha os espaços vázios')
    } else if (valor1 > 10 || valor2 > 10 || valor3 > 10 || valor1 < 0 || valor2 < 0 || valor3 < 0) {
        window.alert('Por favor, escreva um número válido')
    } else {
    var calculo = (valor1 + valor2 + valor3) / 3;
    res.innerHTML = `A média das notas é ${calculo.toFixed(1)}`;
}
}
)
