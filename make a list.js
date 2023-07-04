const inp = document.querySelector("form")
const i = document.querySelector("input")

inp.addEventListener("submit", (e) => {
    e.preventDefault()
    const ne = document.createElement("li")
    ne.innerText = i.value
    i.value = ""
    document.querySelector("#q").appendChild(ne)
})
