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

  } else if(e.target.className.includes('call_btn')) {
    const EmergencyCallBtn = e.target;

    const emergencyServiceTitle = EmergencyCallBtn.parentNode.parentNode.children[1].children[0].innerText;

    const emergencyServiceSubtitle = EmergencyCallBtn.parentNode.parentNode.children[1].children[1].innerText;

    const emergencyServiceNumber = EmergencyCallBtn.parentNode.parentNode.children[2].children[0].innerText;

    const coinsCount = getElement('coin_count').innerText;

    const currentCoinsCount = Number(coinsCount) - 20;

    if(currentCoinsCount < 0) {
      alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে!');
      return;
    }
    getElement('coin_count').innerText = currentCoinsCount;

    const currentTime = new Date().toLocaleTimeString();

    alert(`📞 Calling ${emergencyServiceSubtitle} ${emergencyServiceNumber}...`);

    const callHistoryShowDiv = getElement('call_history_show_div');

    const newDivElement = document.createElement('div');
    newDivElement.innerHTML = `<div class="call_history_box flex flex-col gap-3 pb-3">
              <div class="call_history_info bg-[#f2f2f2] flex items-center justify-between lg:px-3 px-4 py-3 rounded-2xl">
            <div class="title_info">
              <h2 class="font-bold lg:text-[16px]">${emergencyServiceTitle}</h2>
              <p class="text-gray-600 lg:text-[16px] text-[20px] font-semibold">${emergencyServiceNumber}</p>
            </div>
            <div class="time_info text-gray-600 font-semibold rounded-xl">
                <span class="lg:text-[15px]">${currentTime}</span>
            </div>
          </div>`;

          callHistoryShowDiv.append(newDivElement);
  } else if(e.target.className.includes('clear_history_btn')) {
    getElement('call_history_show_div').innerText = '';
  }
  


})