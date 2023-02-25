chrome.alarms.onAlarm.addListener(
    () => {
        chrome.notifications.create(
            // "drink_water",
            {
                type: "basic",
                iconUrl: "icon.ico",
                title: "Stay Hydrated",
                message: "Have a sip of water human!",
                silent: false
            },
            () => { }
        )
    },
)

  chrome.notifications.onClosed.addListener(async () => {
    const item = await chrome.storage.sync.get(['minutes']);
    chrome.alarms.create(
        "drink_water",
        { 
            delayInMinutes: item.minutes,
            periodInMinutes: item.minutes 
        });
  });