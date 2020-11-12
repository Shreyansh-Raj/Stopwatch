var ms = 00;
var s = 00;
var h = 00;
function start() {
    if (ms==100){
        console.log("true");
        (ms) = 0;
        s++;
    }
    else{
        console.log("false");
        ms++;
    }

    if (s==60){
        s = 0;
        h++;
    }

    document.getElementById('time').innerHTML = `${h}:${s}:${ms}`;
}


var running = 0;

function toggleStart() {
    if (running>=1){
        clearInterval(running);
        running=0;
        document.getElementById('start').innerHTML = "Start";
    }
    else{
        running = setInterval(start,10);
        document.getElementById('start').innerHTML = "Stop";
    }
}

function reset(){
    if (running=>1){
        h = 00;
        s = 00;
        ms = 00;
        clearInterval(running);
        console.log(running)
        document.getElementById('time').innerHTML = `${h}:${s}:${ms}`;
        console.log("R")
        if (document.getElementById('start').innerHTML=="Stop"){
            console.log("H")
            document.getElementById('start').click()
        }
    }
    else{
        h = 00;
        s = 00;
        ms = 00;
        // clearInterval(running);
        document.getElementById('time').innerHTML = `${h}:${s}:${ms}`;
    }
}