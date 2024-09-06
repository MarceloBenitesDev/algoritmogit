const taxaCambio = { 
    USD: 5.62,
    EUR: 6.23
}

function converter() {
    const valor = parseFloat(document.getElementById("valor").value)
    const moeda = document.getElementById("moeda").value

    let taxa
   switch (moeda) {
    case "USD":
        taxa = taxaCambio.USD
        break;

    case "EUR":
        taxa = taxaCambio.EUR
        break;
   
    default:
        document.getElementById("resultado").innerHTML = "moeda nao suportada"
        return;
        break;
   }

   const valorConv = valor * taxa
   document.getElementById("resultado").innerHTML = `${valorConv.toFixed(2)} ${moeda}`
}