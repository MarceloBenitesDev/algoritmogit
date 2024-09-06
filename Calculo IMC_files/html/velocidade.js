const frm = document.querySelector("form")
const resp = document.querySelector("h2")

frm.addEventListener("submit",(e) =>{
    e.preventDefault()
    velocidade()
}) 

function velocidade() {
    const kms = document.getElementById("kms").value

    if (kms <= 80) {
        resp.innerHTML = "Voce esta dentro do limite"
    } else if (kms <= 81 && kms >= 100) {
        resp.innerHTML = "Voce tirou muita leve"
    } else {
        resp.innerHTML = "Voce tirou muita grave"
    }
}