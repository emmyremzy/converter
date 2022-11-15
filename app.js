/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")


inputEl.value = "";
const liter = 0.264
const meter = 3.281
const kilogram = 2.202

//convertBtn.addEventListener("click", toLiter)
//convertBtn.addEventListener("click", toKilogram);
//convertBtn.addEventListener("click", toMeter, true);

const callFunc = () => {
    toLiter(); toMeter();
}

//function newBotton (){
//  if(liter)
//}

function toLiter() {

    volumeEl.textContent = inputEl.value * liter
    inputEl.value = "";
}

function toMeter() {
    lengthEl.textContent = inputEl.value * meter
    inputEl.value = "";
}
function toKilogram() {
    massEl.textContent = inputEl.value * kilogram
    inputEl.value = "";

}







