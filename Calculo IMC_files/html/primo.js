function verificarPrimo() {
    var numero = parseInt(document.getElementById('numero').value);
    var resultado = document.getElementById('resultado');

    if (isNaN(numero) || numero < 1 || numero > 100) {
        resultado.textContent = 'Escreva um numero de 1 a 100: ';
        return;
    }

    function isPrimo(n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 === 0 || n % 3 === 0) return false;
        for (let i = 5; i * i <= n; i += 6) {
            if (n % i === 0 || n % (i + 2) === 0) return false;
        }
        return true;
    }

    if (isPrimo(numero)) {
        resultado.textContent ='O número ' + numero + ' é primo.';
    } else {
        resultado.textContent ='O número '+ numero + ' não é primo.';
     }
    }