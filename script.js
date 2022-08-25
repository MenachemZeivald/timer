var frame = document.getElementById("frame");
var res = document.getElementById("result");
var sec, min, hours, lol, sum, sum1, sum2, sum3;

function timer() {
    sec = document.getElementById("seco");
    min = document.getElementById("min");
    hours = document.getElementById("hours");
    sum1 = Number(sec.value) ? Number(sec.value) : 0;
    sum2 = Number(min.value) ? (min.value * 60) : 0;
    sum3 = Number(hours.value) ? (sec.value * 3600) : 0;
    sum = sum1 + sum2 + sum3;
    lol = setInterval(countDown, 1000);
}

function countDown() {
    if (Number(sec.value) || Number(min.value) || Number(hours.value)) {

        let sum1 = Number(sec.value) ? sec.value : 0;
        let sum2 = Number(min.value) ? (min.value * 60) : 0;
        let sum3 = Number(hours.value) ? (sec.value * 3600) : 0;

        //mmObj.addListener(myFunction)

        const mmObj = window.matchMedia("(max-width: 660px)");
        mmObj.matches ? document.getElementById("line").style.height = (((sum1 + sum2 + sum3) / (sum)) * 0.8) + "%" : document.getElementById("line").style.width = (((sum1 + sum2 + sum3) / (sum)) * 0.8) + "%";
        hours.value = (hours.value === "hh" || hours.value == 0) ? "00" : Number(hours.value);
        min.value = (min.value === "mm" || min.value == 0) ? "00" : Number(min.value);
        sec.value = (sec.value === "sec" || sec.value == 0) ? "00" : Number(sec.value);
        hours.value = (hours.value < 10 && hours.value > 0) ? "0" + hours.value : hours.value;
        min.value = (min.value < 10 && min.value > 0) ? "0" + min.value : min.value;
        sec.value = (sec.value < 10 && sec.value > 0) ? "0" + sec.value : sec.value;
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
    } else {
        document.getElementById("line").style.width = "0%";
        setTimeout(function () {
            console.log("kkkkkkk");
            hours.value = "hh";
            hours.style.color = "rgba(0, 0, 0, 0.55)";
            min.value = "mm";
            min.style.color = "rgba(0, 0, 0, 0.55)";
            sec.value = "sec";
            sec.style.color = "rgba(0, 0, 0, 0.55)";
            document.getElementById("line").style.width = "80%";
        }, 1000);
        clearInterval(lol);
    }
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