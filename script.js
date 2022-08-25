var frame = document.getElementById("frame");
var res = document.getElementById("result");
var line = document.getElementById("line");
var sec, min, hours, lol;

function timer() {
    sec = document.getElementById("seco");
    min = document.getElementById("min");
    hours = document.getElementById("hours");

    let sum1 = Number(sec.value) ? Number(sec.value) : 0; // sum of seconds in sec.val
    let sum2 = Number(min.value) ? (min.value * 60) : 0; // sum of seconds in min.val
    let sum3 = Number(hours.value) ? (hours.value * 3600) : 0; // sum of seconds in hours.val
    let sum = sum1 + sum2 + sum3; // // sum of all seconds

    clearInterval(lol); // just to fix if the user submit twice
    linesize(sum); // change the length of the progress line
    lol = setInterval(countDown, 1000); // the main func, call every minut
}

function countDown() {
    if (Number(sec.value) || Number(min.value) || Number(hours.value)) {
        // change the text value in the input field to the right value or to '00' if there is no value
        hours.value = (hours.value === "hh" || hours.value == 0) ? "00" : hours.value; // < 10 || hours.value != "0" + hours.value) ? "0" + hours.value : hours.value;
        min.value = (min.value === "mm" || min.value == 0) ? "00" : min.value; // < 10 || min.value != "0" + min.value) ? "0" + min.value : min.value;
        sec.value = (sec.value === "sec" || sec.value == 0) ? "00" : sec.value; // < 10 || sec.value != "0" + sec.value) ? "0" + sec.value : sec.value;
        sec.value--;
        if (sec.value <= 1) {
            if (min.value >= 1) {
                min.value--;
                sec.value = 59;
            } else if (hours.value >= 1) {
                hours.value--;
                min.value = 59;
                sec.value = 59;
            }
        }
    } else { // if sec + min + hours == 0
        setTimeout(function () { // return to the initial style
            hours.value = "hh";
            hours.style.color = "rgba(0, 0, 0, 0.55)";
            min.value = "mm";
            min.style.color = "rgba(0, 0, 0, 0.55)";
            sec.value = "sec";
            sec.style.color = "rgba(0, 0, 0, 0.55)";
            line.style = "";
        }, 1000);
        clearInterval(lol);
    }
}

function linesize(numOfSec) {
    const mmObj = window.matchMedia("(max-width: 660px)"); // media quary, to change the line horizotally in web and verticaly in mobile 
    mmObj.matches ? line.style.top = "100%" : line.style.left = "-100%";
    line.style.transition = `all linear ${numOfSec}s`;
}

document.getElementById("min").onblur = function blur() {
    (this.value > 0 && this.value < 100) ? (this.value = this.value, this.style.color = "rgba(0, 0, 0, 1)") : (this.value = "mm", this.style.color = "rgba(0, 0, 0, 0.55)");
}
document.getElementById("seco").onblur = function blur() {
    (this.value > 0 && this.value < 100) ? (this.value = this.value, this.style.color = "rgba(0, 0, 0, 1)") : (this.value = "sec", this.style.color = "rgba(0, 0, 0, 0.55)");
}
document.getElementById("hours").onblur = function blur() {
    (this.value > 0 && this.value < 100) ? (this.value = this.value, this.style.color = "rgba(0, 0, 0, 1)") : (this.value = "hh", this.style.color = "rgba(0, 0, 0, 0.55)");
}