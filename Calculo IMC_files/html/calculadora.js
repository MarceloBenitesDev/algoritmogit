function calcular(operation){
    const n1 = parseFloat(document.getElementById("num1").value)
    const n2 = parseFloat(document.getElementById("num2").value)

    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("resultado").innerHTML = "entrada invalida " ;
        
    }

    let resultado
    switch (operation) {
        case '+':
            resultado = n1 + n2
            break;

            case '-':
                resultado = n1 - n2
                break;

                case '*':
                resultado = n1 * n2
                break;

                case '/':
                    if (n2 === 0) {
                        document.getElementById("resultado").innerHTML = "divide por zero"
                        return
                       
                    } result = n1 / n2
                    break
                    default:
                        document.getElementById("resultado").innerHTML = "operacao invalida"

    }
    document.getElementById("resultado").innerHTML = resultado
}