// Your code goes here
// mouseover
// keydown
// wheel
// load
// focus
// resize
// scroll
// select
// dblclick
// drag / drop

const homePage = document.querySelectorAll(".container");
const paragraphs = document.querySelectorAll("p");
const images = document.querySelectorAll("img");
const titles = document.querySelectorAll("h2");
const anchors = document.querySelectorAll("a");
const headTitle = document.querySelector("h1");

paragraphs.forEach(par => {
    par.addEventListener("mouseover", (event) => {
        par.style.display = "none";
        event.stopPropagation();
    })
});

images.forEach(image => {
    image.addEventListener("click", (event) => {
        image.style.animation = "move 5s 2";
        image.style.animationDirection = "alternate";
        event.stopPropagation();
        event.preventDefault();
    })
})

images.forEach(image => {
    image.addEventListener("dblclick", (event) => {
        image.style.transform = "scale(2, .5)";
        event.stopPropagation();
        event.preventDefault();
    })
})

titles.forEach(title => {
    title.addEventListener("mousemove", (event) => {
        title.style.position = "relative";
        title.style.marginLeft = title.style.marginLeft == "-5px" ? "0" : "-5px";
        event.stopPropagation();
        event.preventDefault();
    })
})

anchors.forEach(anchor => {
    anchor.addEventListener("focus", (event) => {
        anchor.style.position = "relative";
        anchor.style.marginTop = anchor.style.marginTop == "10px" ? "0" : "10px";
        console.log(anchor.style.marginTop)
        event.preventDefault();
        event.stopPropagation();
    })
})

anchors.forEach(anchor => {
    anchor.addEventListener("blur", (event) => {
        anchor.style.fontSize = anchor.style.fontSize == "25px" ? "12px" : "25px";
        anchor.style.color = anchor.style.color == "red" ? "black" : "red";
        event.preventDefault();
        event.stopPropagation();
    })
})

anchors.forEach(anchor => {
    anchor.addEventListener("mouseleave", (event) => {
        let anchorCopy = anchor;
        document.querySelector(".nav").appendChild(anchorCopy);
        event.stopPropagation();
        event.preventDefault();
    })
})

headTitle.addEventListener("mouseup", (event) => {
    headTitle.style.color = headTitle.style.color === "salmon" ? "black" : "salmon";
    event.stopPropagation();
    event.preventDefault();
})

document.querySelector("body").addEventListener("keydown",event => {
    homePage.forEach(container => {
        container.style.backgroundColor = container.style.backgroundColor == "white" ? "crimson" : "white";
    })
})

document.querySelector("body").addEventListener("keyup", event => {
    headTitle.innerHTML = headTitle.innerHTML.split("").reverse().join("");
    console.log(headTitle.style);
})