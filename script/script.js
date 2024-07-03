function switchScreen(screenId) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.style.display = "none";
  });
  document.getElementById(screenId).style.display = "block";
}

document.getElementById("menuScreen").style.display = "block";

var countDownDate = new Date("jul 6, 2024 00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "NOW";
  }
}, 1000);

function revealLocation() {
  var now = new Date().getTime();
  if (countDownDate >= now) {
    document.getElementById("locationScreen").style.display = "block";
    document.querySelectorAll(".screen").forEach((screen) => {
      screen.style.display = "none";
    });
  }
}

document
  .getElementById("backToMenuButton")
  .addEventListener("click", function () {
    document.getElementById("locationScreen").style.display = "none";
    switchScreen("gameScreen");
  });
