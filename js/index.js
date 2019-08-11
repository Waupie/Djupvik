import { fetchTableData } from './API.js';

let temperature;

fetchTableData().then(function(data) {
    let table = document.querySelector('table');
    console.log(data);

    function displayTableData(number, time) {
        for (let i = 0; i < data.timeSeries[number].parameters.length; i++) {        
            if (data.timeSeries[number].parameters[i].name == "t") {
                table.innerHTML += getTableHTML(getTime(time), data.timeSeries[number].parameters[i].values);
            }       
        }
    }

    displayTableData(2, 0); //Displays weather right now
    displayTableData(5, 3); //Displays weather in 3 hours
    displayTableData(8, 6); //Displays weather in 6 hours

});


console.log("Current hour is " + getTime(0));
console.log("Time in 3 hours " + getTime(3));
console.log("Time in 25 hours " + getTime(25));

/*
 * Metod som returnerar tid i timmar,
 * parametern number är antal timmar in i framtiden från och med nuvarande tid
 */
function getTime(number) {
    let d = new Date();
    let n = d.getHours();

    if (n + number > 24) {
        n = n + number - 24;
        if (n < 10)
            n = "0" + n;
    } else {
        n += number;
        if (n < 10)
            n = "0" + n;
    }

    return n + ":00";
}

function getTableHTML(time, temp) {
    return ("<tr><td>" + time + "</td><td>" + temp + " &deg;C</td><td>Sol</td></tr>");
}




/* Lägger till CSS som gör navbar mörk när man scrollar ner */

window.addEventListener("scroll", function() {
    let dropdownContent = this.document.querySelector('.dropdown-content');
    dropdownContent.style.display = 'none';

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
        element.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
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



/* Just to see how big the screen size is, REMOVE THIS WHEN DONE */
window.onresize = function(event) {
    console.log("x: " + window.innerWidth+"      y: " + window.innerHeight);
    let dropdownContent = this.document.querySelector('.dropdown-content');
    dropdownContent.style.display = 'none';
}

/* Open menu button
    I changed this from the "onclick"-version to an Event Listener
*/
let menuButton = document.querySelector('#menuA');
menuButton.addEventListener('click', function() {
    let element = document.querySelector('.dropdown-content');
    if (element.style.display === "none")
        element.style.display = "flex";
    else
        element.style.display = "none";
});