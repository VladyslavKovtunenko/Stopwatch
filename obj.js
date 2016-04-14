function Stopwatch () {
    var time = 0;
    var splitTime = 0;
    var msec = 0;
    var sec = 0;
    var min = 0;
    var splitMsec = 0;
    var splitSec = 0;
    var splitMin = 0;
    var countingTime;

    this.isRunning = false;

    this.buttonStart = function () {
        this.isRunning = true;
        startCountingTime();
        document.getElementById("startStop").innerHTML = "<div class=\"button_text\" style=\"color: red\">Stop</div>";
        document.getElementById("splitReset").innerHTML = "<div class=\"button_text\">Split</div>";
    };

    this.buttonStop = function () {
        this.isRunning = false;
        stopCountingTime();
        document.getElementById("startStop").innerHTML = "<div class=\"button_text\" style=\"color: green\">Start</div>";
        document.getElementById("splitReset").innerHTML = "<div class=\"button_text\">Reset</div>";
    };

    this.buttonSplit = function () {
        splitTime = 0;
        showSplitTime();
    };

    this.buttonReset = function () {
        time = 0;
        splitTime = 0;
        stopCountingTime();
        document.getElementById("startStop").innerHTML = "<div class=\"button_text\" style=\"color: green\">Start</div>";
        document.getElementById("allTime").innerHTML = "00:00,00";
        document.getElementById("splitTime").innerHTML = "00:00,00";
        document.getElementById("splitReset").innerHTML = "<div class=\"button_text\">Split</div>";
        clearSplits();
    };

    function startCountingTime () {
        countingTime = setInterval(function () {
            timeCalc();

            document.getElementById("allTime").innerHTML = min + ":" + sec + "," + msec;
            document.getElementById("splitTime").innerHTML = splitMin + ":" + splitSec + "," + splitMsec;
        }, 5);
    }

    function stopCountingTime () {
        clearInterval(countingTime);
    }

    function timeCalc() {
        time++;
        splitTime++;
        msec = Math.floor(time/2)%100;
        sec = Math.floor(time/200)%60;
        min = Math.floor(time/12000);
        splitMsec = Math.floor(splitTime/2)%100;
        splitSec = Math.floor(splitTime/200)%60;
        splitMin = Math.floor(splitTime/12000);

        if(min < 10){
            min = "0" + min;
        }

        if(sec < 10){
            sec = "0" + sec;
        }

        if(msec < 10){
            msec = "0" + msec;
        }

        if(splitMin < 10){
            splitMin = "0" + splitMin;
        }

        if(splitSec < 10){
            splitSec = "0" + splitSec;
        }

        if(splitMsec < 10){
            splitMsec = "0" + splitMsec;
        }
    }

    function showSplitTime () {
        var newSplit = document.createElement("li");
        newSplit.innerHTML = splitMin + ":" + splitSec + "," + splitMsec;
        splits.insertBefore(newSplit, splits.children[0]);
    }

    function clearSplits () {
        document.getElementById("splits").innerHTML = "";
    }
}