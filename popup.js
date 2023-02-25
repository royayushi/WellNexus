
const ele = document.getElementById("btn")
ele.addEventListener("click", () => {
    chrome.runtime.sendMessage({ time: "0.5" }, function (response) {
        console.log(response);
    });
});