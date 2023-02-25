
function createAlarm(event) {
    let minutes = parseFloat(event.target.value);
    chrome.alarms.create(
        "drink_Water",
        {
            delayInMinutes: minutes,
            periodInMinutes: minutes
        });
    chrome.storage.sync.set({minutes: minutes});
    window.close();
  }

// ele.addEventListener("click", () => {
//     chrome.runtime.sendMessage({ time: "0.5" }, function (response) {
//         console.log(response);
//     });
// });
  
//   function clearAlarm() {
//     chrome.action.setBadgeText({text: ''});
//     chrome.alarms.clearAll();
//     window.close();
//   }

  document.getElementById('sampleMinute').addEventListener('click', createAlarm);
  document.getElementById('min30').addEventListener('click', createAlarm);
  document.getElementById('min60').addEventListener('click', createAlarm);
  document.getElementById('min120').addEventListener('click', createAlarm);
  document.getElementById('min180').addEventListener('click',createAlarm);
  document.getElementById('min240').addEventListener('click', createAlarm);
//   document.getElementById('cancelAlarm').addEventListener('click', clearAlarm);