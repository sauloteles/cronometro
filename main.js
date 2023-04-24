const minutes = document.getElementById("main__minutes");
const seconds = document.getElementById("main__seconds")
const milliseconds = document.getElementById("main__milliseconds")

const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
const btnReset= document.getElementById("btn-reset");

let countingBoolean=false;
let millisecondsTime = 0;
let secondsTime = 0;
let minutesTime = 0;

const countingTime =  setInterval(() => { 
    if(countingBoolean){
        ++millisecondsTime;
        milliseconds.textContent = formatMilliseconds();
        if(millisecondsTime == 99){
            millisecondsTime = 0;
            ++secondsTime;
            seconds.textContent = formatSeconds();
        }
        if(secondsTime == 59){
            secondsTime = 0;
            ++minutesTime;
            minutes.textContent = formatMinutes(); 
        }
}},10);


const formatMilliseconds = () => {
    if(millisecondsTime < 10)
        return '00'+ String(millisecondsTime);
    else
        return String(millisecondsTime);
}

const formatSeconds = () => {
    if(secondsTime < 10)
        return '0' + String(secondsTime);
    else
        return String(secondsTime);
}

const formatMinutes = () => {
    if(minutesTime < 10)
    return '0' + String(minutesTime);
else
    return String(minutesTime);

}



btnStart.addEventListener("click", () => countingBoolean = true);
btnPause.addEventListener("click", () => {countingBoolean = false});
btnReset.addEventListener("click",()=>{
    countingBoolean = false
    milliseconds.textContent = '00';
    seconds.textContent = '00';
    minutes.textContent = '00';

    millisecondsTime = 0;
    secondsTime = 0;
    minutesTime = 0;

})
