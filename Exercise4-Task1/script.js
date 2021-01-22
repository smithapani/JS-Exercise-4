let monthlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let date = new Date();
let day = date.getDate();
let month = date.getMonth(); 
let year = date.getFullYear();

document.write("Date   "+ day + " " +monthlist[month].slice(0,3) + " " +year);
document.write('<br>')
document.write('<br>')

let hourss = date.getHours();
let minutess = date.getMinutes();
let secondss = date.getSeconds();

if(secondss < 10){
    displaySecondss = "0" + secondss.toString();
}

else{
    displaySecondss = secondss;
}

if(minutess < 10){
    displayMinutess = "0" + minutess.toString();
}

else{
    displayMinutess = minutess;
}

if(hourss < 10){
    displayHourss = "0" + hourss.toString();
}

else{
    displayHourss = hourss;
}

document.write("Time   "+ displayHourss + ":" +displayMinutess+ ":" +displaySecondss);

let seconds = 0;
let minutes = 0;
let hours = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//let status = "stopped";
let interval = null; 

function stopwatch(){

    seconds++;

    if(seconds % 60 === 0){
        seconds = 0;
        minutes++;

        if(minutes % 60 === 0){
            minutes = 0;
            hours++;
        }
    }

    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }

    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }

    else{
        displayMinutes = minutes;
    }

    if(hours < 10){
        displayHours = "0" + hours.toString();
    }

    else{
        displayHours = hours;
    }

    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}


function starting(){

    interval = window.setInterval(stopwatch,1000);
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("resume").disabled = true;
    document.getElementById("reset").disabled = false;

}

function stopping(){

    window.clearInterval(interval);
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = true;
    document.getElementById("resume").disabled = false;
    document.getElementById("reset").disabled = false;

}

function resuming(){

    interval = window.setInterval(stopwatch,1000);
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("resume").disabled = true;
    document.getElementById("reset").disabled = false;
}

function reseting(){
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    document.getElementById("resume").disabled = true;

}
