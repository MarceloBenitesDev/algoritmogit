function calcularFrete() {
    var peso = parseFloat(document.getElementById('peso').value);
    var modalidade = document.getElementById('modalidade').value;
    var resultado = document.getElementById('resultado');

    var taxas = {
        padrão: 10.00,
        expresso: 17.00,
        internacional: 23.00
    };

    if (isNaN(peso) || peso <= 0) {
        resultado.textContent = 'Insira o peso do pacote: ';
        return;
    }

    var valorFrete = peso * taxas[modalidade];

    resultado.textContent = 'O valor do frete no padrão ' + modalidade + ' é R$ ' + valorFrete.toFixed(2) + '.';
}