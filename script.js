var _=require('lodash');


var array1=[1,2,3,4,5,6,7];
console.log(_.without(array1,3));
var array2=[1,2,3,4,5,6,7];
console.log(_.without(array2,5));
var css = document.getElementsByTagName("h3")[0];
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

setGradient();
function setGradient() {
    body.style.background =
        "linear-gradient(to right,"
        + color1.value
        + ","
        + color2.value
        + ")";
        css.textContent=body.style.background+";";
};

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

