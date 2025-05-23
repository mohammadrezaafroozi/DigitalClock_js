const hourClock = document.getElementById('hour')
const minuteClock = document.getElementById('minutes')
const sClock = document.getElementById('seconds')
const ampmClock = document.getElementById('ampm')


function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if(h>12){
    h = h - 12
    ampm = "PM"
}

h = h < 10 ? "0" + h : h
m = m < 10 ? "0" + m : m
s = s < 10 ? "0" + s : s

hourClock.innerText = h;
minuteClock.innerText = m;
sClock.innerText = s
ampmClock.innerText = ampm
setTimeout(()=>{
 updateClock()
},1000)
}
updateClock()
