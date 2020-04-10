const time = document.getElementById('time'),
greeting = document.getElementById('greeting');

function showTime(){
    let today =  new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    const aMpM = hour >= 12 ? 'PM' : 'AM';
    // hour = hour%12 || 12; 

    time.innerHTML = `${hour}<span>:<span/>${addZero(min)}<span>:<span/>${addZero(sec)}`;
    setTimeout(showTime, 1000);
}
function addZero(number){
    return(parseInt(number, 10) < 10 ? '0' : '') + number;
}
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