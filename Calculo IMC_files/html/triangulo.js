function classificarTriangulo() {
    var lado1 = parseFloat(document.getElementById('lado1').value);
    var lado2 = parseFloat(document.getElementById('lado2').value);
    var lado3 = parseFloat(document.getElementById('lado3').value);
    var resultado = document.getElementById('resultado');
    var img = document.getElementById('img')

    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) ||
        lado1 <= 0 || lado2 <= 0 || lado3 <= 0 ||
        lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
        resultado.textContent = 'Os valores fornecidos não formam um triângulo válido.';
        img.style.display = 'none';
        return;
    }
 
 if (lado1 === lado2 && lado2 === lado3) {
    resultado.textContent = 'O triângulo é equilátero.';
    img.src = "img/equilatero.png";
} else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
    resultado.textContent = 'O triângulo é isósceles.';
    img.src = "img/isosceles.png";
} else {
    resultado.textContent = 'O triângulo é escaleno.';
    img.src = "img/escaleno.png";
}

img.style.display = 'block';
}