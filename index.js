function changeMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
 document.getElementById("check").addEventListener("click", changeMode);