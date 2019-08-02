


/* Lägger till CSS som gör navbar mörk när man scrollar ner */
window.addEventListener("scroll", function() {
    let element = document.querySelector("nav");
    if(window.scrollY == 0) {
        element.classList.remove("black");
    } else {
        element.classList.add("black");
    }
});

window.addEventListener("scroll", function() {
    let element = document.querySelector('nav');
    let oneA = document.querySelector('#oneA');
    let twoA = document.querySelector('#twoA');
    let threeA = document.querySelector('#threeA');
    let fourA = document.querySelector('#fourA');
    let fiveA = document.querySelector('#fiveA');
    let sixA = document.querySelector('#sixA');
    let menuA = document.querySelector('#menuA');
    let dropDownElement = document.querySelector('.dropdown-content a');
    if (this.window.scrollY == 0 || this.window.screenY < 0) {
        element.style.backgroundColor = "rgba(0, 0, 0, 0)";
        element.style.color = "#333";
        oneA.style.color = "#333";
        twoA.style.color = "#333";
        threeA.style.color = "#333";
        fourA.style.color = "#333";
        fiveA.style.color = "#333";
        sixA.style.color = "#333";
        menuA.style.color = "#333";
        dropDownElement.style.color = "#333";
    } else {
        element.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        element.style.color = "#fff";
        oneA.style.color = "#fff";
        twoA.style.color = "#fff";
        threeA.style.color = "#fff";
        fourA.style.color = "#fff";
        fiveA.style.color = "#fff";
        sixA.style.color = "#fff";
        menuA.style.color = "#fff";
        dropDownElement = "#fff";
    }
});

window.onresize = function(event) {
	console.log("x: " + window.innerWidth+"      y: " + window.innerHeight);
}

function toggleMenu() {
    let element = document.querySelector('.dropdown-content');
    if (element.style.display === "none") {
        element.style.display = "flex";
    } else {
        element.style.display = "none";
    }
}