
function createAlarm(event) {
    let minutes = parseFloat(event.target.value);
    chrome.alarms.create(
        "drink_Water",
        {
            delayInMinutes: minutes,
            periodInMinutes: minutes
        });
    chrome.storage.sync.set({minutes: minutes}
    );
    window.close();
  }
  
//   function clearAlarm() {
//     chrome.action.setBadgeText({text: ''});
//     chrome.alarms.clearAll();
//     window.close();
//   }

function saveCheckbox() {
var yeswater = document.getElementById('setwateralarm').checked;
  chrome.storage.sync.set({
    yeswater: yeswater
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restoreCheckbox() {
    // Use default value yeswater = false.
    chrome.storage.sync.get({
      yeswater: false
    }, function(items) {
      document.getElementById('setwateralarm').checked = items.yeswater;
    });
  }
  document.addEventListener('DOMContentLoaded', restoreCheckbox);
  document.getElementById('setwateralarm').addEventListener('click',
      saveCheckbox);

  document.getElementById('sampleMinute').addEventListener('click', createAlarm);
  document.getElementById('min30').addEventListener('click', createAlarm);
  document.getElementById('min60').addEventListener('click', createAlarm);
  document.getElementById('min120').addEventListener('click', createAlarm);
  document.getElementById('min180').addEventListener('click',createAlarm);
  document.getElementById('min240').addEventListener('click', createAlarm);
//   document.getElementById('cancelAlarm').addEventListener('click', clearAlarm);


  function showTime() {
    var showDiv = document.getElementById("timeIntervals");
    var checkvalue = document.getElementById('setwateralarm').checked;
    if (checkvalue) {
      showDiv.style.display = "block";
    } else {
      showDiv.style.display = "none";
    }
  }

  document.getElementById("setwateralarm").onclick = function() {showTime()};