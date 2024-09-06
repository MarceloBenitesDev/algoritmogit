const frm = document.querySelector("form")
const resp = document.querySelector("h2")

frm.addEventListener("submit",(e) =>{
    e.preventDefault()
    qualanota()
})

function qualanota() {
    const nota = document.getElementById("nota").value

    if (nota >= 9) {
        resp.innerHTML = "tirou A"
    } else if (nota >= 7 && nota < 9) {
        resp.innerHTML = "tirou B"
    } else if (nota >= 5 && nota < 7){
        resp.innerHTML = "tirou C"
    } else if (nota >= 3 && nota < 5) {
       resp.innerHTML = "tirou D"   
    } else {
        resp.innerHTML = "tirou E"
    }
}