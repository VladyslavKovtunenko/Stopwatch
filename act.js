var time = 0;
var splitTime = 0;
var isRunning = false;
var stopwatch;

function Split(a, b, c) {
    this.min = a;
    this.sec = b;
    this.msec = c;

    this.showTime = function() {
        var newSplit = document.createElement("li");
        newSplit.innerHTML = this.min + ":" + this.sec + "," + this.msec;

        splits.insertBefore(newSplit, splits.children[0]);
    };

    this.clearSplits = function () {
        document.getElementById("splits").innerHTML = "";
    };

}

var split = new Split();

function start() {
    if (!isRunning){
        isRunning = true;
        startTimeRunning();
        document.getElementById("startStop").innerHTML = "Stop";
        document.getElementById("splitReset").innerHTML = "Split";
    } else {
        isRunning = false;
        document.getElementById("startStop").innerHTML = "Start";
        document.getElementById("splitReset").innerHTML = "Reset";
        clearInterval(stopwatch);
    }
}

function reset() {
    if(!isRunning){
        time = 0;
        splitTime = 0;
        document.getElementById("startStop").innerHTML = "Start";
        document.getElementById("allTime").innerHTML = "00:00,00";
        document.getElementById("splitTime").innerHTML = "00:00,00";
        document.getElementById("splitReset").innerHTML = "Split";
        split.clearSplits();
    } else {
        splitTime = 0;
        split.showTime();
    }

}

function startTimeRunning() {
    if (isRunning){
        stopwatch = setInterval(function (){
            time++;
            splitTime++;
            var millisec = Math.floor(time/2)%100;
            var seconds = Math.floor(time/200)%60;
            var minutes = Math.floor(time/12000);

            if(minutes < 10){
                minutes = "0" + minutes;
            }

            if(seconds < 10){
                seconds = "0" + seconds;
            }

            if(millisec < 10){
                millisec = "0" + millisec;
            }

            split.msec = Math.floor(splitTime/2)%100;
            split.sec = Math.floor(splitTime/200)%60;
            split.min = Math.floor(splitTime/12000);

            if(split.min < 10){
                split.min = "0" + split.min;
            }

            if(split.sec < 10){
                split.sec = "0" + split.sec;
            }

            if(split.msec < 10){
                split.msec = "0" + split.msec;
            }

            document.getElementById("allTime").innerHTML = minutes + ":" + seconds + "," + millisec;
            document.getElementById("splitTime").innerHTML = split.min + ":" + split.sec + "," + split.msec;
            //startTimeRunning();
        }, 5);
    }
}