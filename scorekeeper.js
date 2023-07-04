let p1 = 0
let p2 = 0
let ms = 10
let flag = 0
let win = "k"
const form = document.querySelector("form")
const b1 = document.querySelector("#p1")
const b2 = document.querySelector("#p2")
const ba = document.querySelector("div")
const inp2 = document.querySelector("#ms")
const h1 = document.querySelector("h1")

inp2.addEventListener("change", (e) => {
    e.preventDefault()
    ms = inp2.value
    console.log(ms)

})
ba.addEventListener("click", (e) => {
    e.preventDefault()
    if (e.target == b1 && p1 + p2 < ms - 1) {
        console.log("b1")
        p1 += 1
        b1.innerText = `p1 : ${p1}`
    }
    else if (e.target == b2 && p1 + p2 < ms - 1) {
        console.log("b2")
        p2 += 1
        b2.innerText = `p2 : ${p2}`
    }
    else if (p1 + p2 >= ms - 1) {


        console.log("game over")
        const h2 = document.createElement("h1")
        h2.innerText = `GAME OVER !!`
        h2.style.color = "red"
        h2.style.border = "10px solid white"
        document.querySelector("body").appendChild(h2)
        ba.remove()
        inp2.remove()

    }
})




