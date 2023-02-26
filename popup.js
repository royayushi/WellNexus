
function createAlarm(event) {
    let minutes = parseFloat(event.target.value);
    chrome.alarms.clear("drink_water");
    chrome.alarms.create(
      "drink_Water",
      {
        delayInMinutes: minutes,
        periodInMinutes: minutes
      }
    );
    chrome.storage.sync.set({ minutes: minutes, stopAlarm: false });
    window.close();
  }
  
  function stopAlarm() {
    chrome.alarms.clearAll( function(wasCleared) {
      if (wasCleared) {
        console.log("Alarm cleared successfully");
        chrome.storage.sync.set({ stopAlarm: true });
      } else {
        console.log("Alarm not found");
      }
    });
  }
  
  function saveCheckbox() {
    var yeswater = document.getElementById('setwateralarm').checked;
    chrome.storage.sync.set({
      yeswater: yeswater
    });
  
    if (!yeswater) {
      stopAlarm();
      chrome.storage.sync.set({
        stopAlarm: true
      });
    } else {
      chrome.storage.sync.set({
        stopAlarm: false
      });
    }
  }
  
  
  function restoreCheckbox() {
    chrome.storage.sync.get({
        yeswater: false
      }, function(items) {
        document.getElementById('setwateralarm').checked = items.yeswater;
        if (!items.yeswater) {
          stopAlarm();
        }
      });
  }
  
  document.addEventListener("DOMContentLoaded", restoreCheckbox);
  document.getElementById("setwateralarm").addEventListener("click", saveCheckbox);
  
  document.getElementById("sampleMinute").addEventListener("click", createAlarm);
  document.getElementById("min30").addEventListener("click", createAlarm);
  document.getElementById("min60").addEventListener("click", createAlarm);
  document.getElementById("min120").addEventListener("click", createAlarm);
  document.getElementById("min180").addEventListener("click", createAlarm);
  document.getElementById("min240").addEventListener("click", createAlarm);
  
  function showTime() {
    var showDiv = document.getElementById("timeIntervals");
    var checkvalue = document.getElementById("setwateralarm").checked;
    if (checkvalue) {
      showDiv.style.display = "flex";
      chrome.storage.local.set({ showDiv: "flex" });
    } else {
      showDiv.style.display = "none";
      chrome.storage.local.set({ showDiv: "none" });
      stopAlarm();
    }
  }
  
  function restoreShowTime() {
    chrome.storage.sync.get(['yeswater', 'stopAlarm'], function(result) {
      var showDiv = document.getElementById("timeIntervals");
      var checkbox = document.getElementById('setwateralarm');
      checkbox.checked = result.yeswater;
      showDiv.style.display = result.yeswater ? "flex" : "none";
      if (!result.yeswater && result.stopAlarm) {
        stopAlarm();
        chrome.storage.sync.set({ stopAlarm: false });
      }
    });
  }
  
  
  document.getElementById("setwateralarm").onclick = function() {
    showTime();
  };
  document.addEventListener("DOMContentLoaded", restoreShowTime);

  document.addEventListener('DOMContentLoaded', function() {
    var openWebsiteLink = document.getElementById('openWebsiteLink');
  
    // adding a click event listener to the link
    openWebsiteLink.addEventListener('click', function() {
      // creating a new tab with the website url
      //  chrome.tabs.create({ url: chrome.runtime.getURL('index.html') });
       chrome.tabs.create({ url: 'https://well-nexus.netlify.app/' });
    });
  });
  
  