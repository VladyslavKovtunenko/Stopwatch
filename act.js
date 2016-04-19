var stopwatch = new Stopwatch();

function eventStartStop() {
    if (!stopwatch.isRunning){
        stopwatch.buttonStart();
    } else {
        stopwatch.buttonStop();
    }
}
function eventSplitReset() {
    if (stopwatch.isRunning){
        stopwatch.buttonSplit();
    } else {
        stopwatch.buttonReset();
    }
}