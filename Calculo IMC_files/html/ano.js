function verificarAno() {
    var ano = parseInt(document.getElementById('ano').value);
    var resultado = document.getElementById('resultado');

    if (isNaN(ano)) {
        resultado.textContent = 'Por favor, insira um ano válido.';
    } else if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        resultado.textContent = ano + ' é um ano bissexto.';
    } else {
        resultado.textContent = ano + ' não é um ano bissexto.';
    }
}