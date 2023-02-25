
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
      showDiv.style.display = "flex";
      chrome.storage.local.set({showDiv: "flex"});
    } 
    else {
      showDiv.style.display = "none";
      chrome.alarms.clear("drink_water");
      if (alarmCleared === true) {
        alert("Your water reminder has been deleted.")
    }
    else{
        alert("You still have your water reminder!")
    }
      chrome.storage.local.set({showDiv: "none", alarmCleared: true});
    }   
  }

function restoreShowTime() {
    chrome.storage.local.get("showDiv", function(result) {
        var showDiv = document.getElementById("timeIntervals");
        showDiv.style.display = result.showDiv || "none";
      });
}

function restoreAlarmCleared() {
    chrome.storage.local.get(['alarmCleared'], function(result) {
        var alarmCleared = result.alarmCleared;
        if (alarmCleared === true) {
            alert("Your water reminder has been deleted.")
        }
        else{
            alert("You still have your water reminder!")
        }
    })
}   

  document.getElementById("setwateralarm").onclick = function() {showTime()};
  document.addEventListener('DOMContentLoaded', restoreShowTime);
  document.addEventListener('DOMContentLoaded', restoreAlarmCleared);