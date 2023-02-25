chrome.alarms.onAlarm.addListener(() => {
    chrome.storage.sync.get(['minutes'], (result) => {
        chrome.notifications.create({
            type: "basic",
            iconUrl: "icon.ico",
            title: "Stay Hydrated",
            message: "Have a sip of water human!",
            silent: false
        }, () => { });
        const minutes = result.minutes;
        chrome.alarms.create("drink_water", {
            delayInMinutes: minutes,
            periodInMinutes: minutes
        });
    });
});

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({minutes: 30});
});

chrome.notifications.onClosed.addListener(async () => {
    const item = await chrome.storage.sync.get(['minutes']);
    function showMinutes(item) {
        console.log('Minutes value currently is ' + item.minutes);
    }
    showMinutes(item);
});

// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     if (message.type === 'stopAlarm') {
//       chrome.alarms.clear('drink_water', function(wasCleared) {
//         if (wasCleared) {
//           sendResponse({ message: 'alarm_cleared' });
//         }
//       });
//     }
//   });
  