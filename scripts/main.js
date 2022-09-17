console.log('banana');

// Get time since like noon
const oldTime = 1663430529722;

function getTimeString(num) {
  let numString = num.toString();
  if (numString.length === 1) {
    numString = '0' + numString;
  };
  return numString
}

function timeElapsed() {
  const d = new Date();
  let time = d.getTime() - oldTime;
  let hours = Math.floor(time/3600000);
  time = time - hours*3600000;
  let minutes = Math.floor(time/60000);
  time = time - minutes*60000;
  let seconds = Math.floor(time/1000);
  hours = hours%24;
  let fullString = getTimeString(hours) + ':' + getTimeString(minutes) + ':' + getTimeString(seconds);
  return fullString
}
// Create a string with the time variables
const interval = setInterval(setPageTime, 1000);

console.log(timeElapsed())
function setPageTime() {
  let str = timeElapsed();
  document.getElementById("clock").innerHTML = str
}
