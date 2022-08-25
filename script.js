var frame = document.getElementById("frame");
var res = document.getElementById("result");
var line = document.getElementById("line");
var sec, min, hours, lol, sum, sum1, sum2, sum3;

function timer() {
    sec = document.getElementById("seco");
    min = document.getElementById("min");
    hours = document.getElementById("hours");
    sum1 = Number(sec.value) ? Number(sec.value) : 0; // sum of seconds in sec.val
    sum2 = Number(min.value) ? (min.value * 60) : 0; // sum of seconds in min.val
    sum3 = Number(hours.value) ? (sec.value * 3600) : 0; // sum of seconds in hours.val
    sum = sum1 + sum2 + sum3; // // sum of all seconds
    clearInterval(lol); // just to fix if the user submit twice
    lol = setInterval(countDown, 1000); // the main func, call every minut
}

function countDown() {
    if (Number(sec.value) || Number(min.value) || Number(hours.value)) {
        // change the text value in the input field to the right value or to '00' if there is no value
        sum1 = Number(sec.value) ? sec.value : 0;
        sum2 = Number(min.value) ? (min.value * 60) : 0;
        sum3 = Number(hours.value) ? (sec.value * 3600) : 0;
        hours.value = (hours.value === "hh" || hours.value == 0) ? "00" : hours.value < 10 ? "0" + hours.value : hours.value;
        min.value = (min.value === "mm" || min.value == 0) ? "00" : min.value < 10 ? "0" + min.value : min.value;
        sec.value = (sec.value === "sec" || sec.value == 0) ? "00" : sec.value < 10 ? "0" + sec.value : sec.value;
        // change the length of the progrress line 
        linesize();
        sec.value--;
        console.log(hours.value + min.value + sec.value);
        console.log(sum);
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
        line.style.width = "0%";
        setTimeout(function () { // return to the initial style
            hours.value = "hh";
            hours.style.color = "rgba(0, 0, 0, 0.55)";
            min.value = "mm";
            min.style.color = "rgba(0, 0, 0, 0.55)";
            sec.value = "sec";
            sec.style.color = "rgba(0, 0, 0, 0.55)";
            line.classList.remove("smooth");
            line.style.width = "80%"; // change the line to the initial size 
            line.style.transform = "scale(1)";
        }, 1000);
        clearInterval(lol);
    }
}

function linesize() {
    line.classList.add("smooth");
    const mmObj = window.matchMedia("(max-width: 660px)"); // media quary, to change the line horizotally in web and verticaly in mobile 
    mmObj.matches ? line.style.transform = `scaleY(${(((sum1 + sum2 + sum3) / (sum)) / 100)})` : line.style.transform = `scaleX(${(((sum1 + sum2 + sum3) / (sum)) / 100)})`;
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