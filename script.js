console.log("script.js loaded");

function openPopup() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("errorMsg").style.display = "none";
  document.getElementById("passwordInput").value = "";
}

function closePopup() {
  document.getElementById("overlay").style.display = "none";
}

function submitPassword() {
  var pwd = document.getElementById("passwordInput").value;

  if (pwd === "scout") {
    window.location.href = "clue.html";
  } else {
    document.getElementById("errorMsg").style.display = "block";
  }
}
