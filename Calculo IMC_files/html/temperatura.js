
const frm = document.querySelector("form")
const resp = document.querySelector("h2")
const puxarId = document.querySelector("#inCelsius")

frm.addEventListener("submit", (e) =>{
  e.preventDefault()
  totalFaren()
})

function totalFaren() {
  const c = parseFloat(puxarId.value)
  const fa = (c*9/5) + 32
  resp.innerHTML = `Sua temperatura em farenhait: ${fa}`
}
frm.addEventListener("reset", () => {
  resp.innerText = ""
})