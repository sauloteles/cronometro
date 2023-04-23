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
    console.log(++millisecondsTime);
    milliseconds.textContent = String(millisecondsTime);
    if(millisecondsTime == 999){
        millisecondsTime = 0;
        ++secondsTime;
        seconds.textContent = String(secondsTime);
    }
    if(secondsTime == 59){
        secondsTime == 0;
        ++minutesTime;
        minutes.textContent = millisecondsTime; 
    }
}},0.001);

console.log('parou')

btnStart.addEventListener("click", () => countingBoolean = true);
btnPause.addEventListener("click", () => {countingBoolean = false});
btnReset.addEventListener("click",()=>{
    countingBoolean = false
    milliseconds.textContent = '000';
    seconds.textContent = '00';
    minutes.textContent = '00';

    millisecondsTime = 0;
    secondsTime = 0;
    minutesTime = 0;

})
