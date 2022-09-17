console.log('banana');

let waterCount = 0
// water the plant
const waterbutton = document.getElementById("water");
const watercan = document.getElementById("can");
const water = document.getElementById("droplets");
console.log(droplets);

waterbutton.onclick = function tiltCan() {
  waterCount +=1
  watercan.style.display = 'block';
  watercan.style.animation = '4s tiltDown';
  water.style.display = 'block';
  water.style.animation = '3s dropDown';
  setTimeout(function(){water.style.animation = 'none'; water.style.display = 'none'}, 3000);
  setTimeout(function(){watercan.style.animation = 'none'; watercan.style.display = 'none'}, 4000);
  console.log(waterCount)
}
