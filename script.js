const time = document.getElementById('time'),
greeting = document.getElementById('greeting');

function showTime(){
    let today =  new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    const aMpM = hour >= 12 ? 'PM' : 'AM';
    //for 12 hours time
    // hour = hour%12 || 12; 
    // display time
    time.innerHTML = `${hour}<span>:<span/>${addZero(min)}<span>:<span/>${addZero(sec)}`;
    setTimeout(showTime, 1000);
}
// add zero to minute and seconds when their values is less than 10
function addZero(number){
    return(parseInt(number, 10) < 10 ? '0' : '') + number;
}
//display greetings
function setGreeting(){
    let today =  new Date(),
    hour = today.getHours();
    if(hour < 12){
        greeting.textContent = 'Good Morning';
    }else if(hour < 18){
        greeting.textContent = 'Good Afternoon';
    }else{
        greeting.textContent = 'Good Evenimg';
    }
}
showTime();
setGreeting();
