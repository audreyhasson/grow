console.log('banana');

// Get time and set it to initial time
const oldTime = 1663430529722;
const d = new Date();
let time = d.getTime() - oldTime;
let hours = Math.floor(time/36000);
time = time - hours*36000;
let minutes = Math.floor(time/6000);
time = time - minutes*6000;
let seconds = Math.floor(time/100);
hours = hours%24
console.log(hours, minutes, seconds);
