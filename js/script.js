//? Assignment 5 - Emergency Hotline all js code

//? function to capture all the id

function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

//? addEventListener to the emergency hotline container

getElement('emergency_hotline_container').addEventListener('click', function(e) {
  if(e.target.className.includes('card_heart_icon')) {
    const heartCount = getElement('nav_heart_count').innerText;
    const currentHeartCount = Number(heartCount) + 1;
    getElement('nav_heart_count').innerText = currentHeartCount;
  }
})