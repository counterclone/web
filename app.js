const bu = document.querySelector("button")
bu.addEventListener("click", () => {
    let r = ((Math.random()) * 255)
    let g = ((Math.random()) * 255)
    let b = ((Math.random()) * 255)
    let ran = `rgb(${r} , ${g}, ${b})`
    console.log(`${r} , ${g}, ${b}`)
    document.querySelector("body").style.backgroundColor = ran
    console.log("color change!!")
    document.querySelector("h1").innerText = ran

})

