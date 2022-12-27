// RGB Background Color Generator

const body = document.querySelector("body")
const button = document.querySelector(".btn")

button.addEventListener("click", function() {

    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    const newColor = `rgb(${r}, ${g}, ${b})`

    body.style.background = newColor;
    body.style.transitionDelay = "all"
    body.style.transitionDuration = "0.5s"
    body.style.transitionProperty = "ease"

    document.querySelector(".css-show").innerHTML = ` backgroud-color: ${newColor};`;

})
