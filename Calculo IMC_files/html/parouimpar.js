function verificarParOuImpar() {

    var numero = parseInt(document.getElementById('numero').value);
    var resultado = document.getElementById('resultado');

    if (isNaN(numero)) {
        resultado.textContent = 'Este número é inválido.';
    } else if (numero % 2 === 0) {
        resultado.textContent ='O número ' + numero + ' é par.';
    } else {
        resultado.textContent = 'O número ' + numero + ' é ímpar.';
    }
}