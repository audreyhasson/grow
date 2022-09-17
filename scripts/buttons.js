console.log('banana');

//TIME STUFF
// Get time since like noon
let oldTime = 1663430529722;
let go = true;

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
  if (go) {
    let str = timeElapsed();
    document.getElementById("clock").innerHTML = str;
  }
}


//BUTTON STUFF
let resetbutton = document.getElementById("reset");

let status = 'Your plant is doing great!';
//set initial plant status
const statusElement = document.getElementById("status");
statusElement.innerHTML = status;

let waterCount = 0;
let lastWater = 0;
let tooSoon = 0;
//get plant and set it as plant
const plant = document.getElementById("plant");
// water the plant
const waterbutton = document.getElementById("water");
const watercan = document.getElementById("can");
const water = document.getElementById("droplets");
console.log(droplets);

function plantWorsens() {
  if (status === 'Your plant is doing great!') {
    plant.src = 'images/sickbabyplant.png';
    status = "Your plant isn't looking so good...";
    statusElement.innerHTML = status;
  } else if (status ==="Your plant isn't looking so good...") {
    plant.src = 'images/deadbabyplant.png';
    status = "You killed your plant.";
    statusElement.innerHTML = status;
    let d = new Date();
    oldTime = d.getTime()
    go = false;
    resetbutton.style.display = 'block';
  }
}

function checkHealth(count, lastWater) {
  let str = 'you waited this long to water ur boy: '
  let d = new Date();
  let interval = d.getTime() - lastWater;
  if (interval<2000) {
    tooSoon+=1;
  } else if (interval>=2000) {
    tooSoon = 0;
  }
  if (tooSoon >= 5) {
    plantWorsens();
    tooSoon = 0;
  }
}

waterbutton.onclick = function tiltCan() {
  waterCount +=1
  watercan.style.display = 'block';
  watercan.style.animation = '4s tiltDown';
  water.style.display = 'block';
  water.style.animation = '3s dropDown';
  setTimeout(function(){water.style.animation = 'none'; water.style.display = 'none'}, 3000);
  setTimeout(function(){watercan.style.animation = 'none'; watercan.style.display = 'none'}, 4000);
  console.log(waterCount, lastWater)
  checkHealth(waterCount, lastWater)
  let d = new Date();
  lastWater = d.getTime();
}



//rename MARK
const renamebutton = document.getElementById('rename');
let allNames = document.getElementsByClassName("name");

renamebutton.onclick = function getName() {
  let name = prompt("What would you like to name your plant?")
  for (let i = 0; i<allNames.length; i++) {
    allNames[i].innerHTML = name;
  }
}

//reset mark

resetbutton.onclick = function reset() {
  if (go!==true) {
    resetbutton.style.display = 'none';

    let d = new Date();
    oldTime = d.getTime();
    go = true;
    status = 'Your plant is doing great!';
    statusElement.innerHTML = status;
    plant.src = 'images/babyplant.png';
  }
}
