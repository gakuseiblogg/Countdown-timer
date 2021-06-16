const daysEI=document.getElementById('days');
const hoursEI=document.getElementById('hours');
const minsEI=document.getElementById('mins');
const secondsEI=document.getElementById('seconds');

//↓来年の年を変数に
const newYears="1 Jan 2022";

function countdown(){
    const newYearsDate=new Date(newYears);
    const currentDate=new Date();

    const totalSeconds=(newYearsDate-currentDate)/1000;

    const days=Math.floor(totalSeconds/3600/24);
    const hours =Math.floor(totalSeconds/3600)%24;
    const mins=Math.floor(totalSeconds/60)%60;
    const seconds=Math.floor(totalSeconds)%60;

   daysEI.innerHTML=days
   hoursEI.innerHTML=hours;
   minsEI.innerHTML=mins;
   secondsEI.innerHTML=seconds;

}

countdown();

setInterval(countdown,1000);