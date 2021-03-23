// DOM Elements
const rocketBtn = document.getElementById("launch-btn");
const videoPlayer = document.getElementById("rocketVid");
// Function
let launch = function () {
  rocket.style.animation = "takeoff 30s linear 9s forwards, none";
  base.style.animation = "apollo12 30s linear 9s forwards, none";
  stand1arm.style.animation = "arm1 2s linear 1s forwards, none";
  stand3arm.style.animation = "arm2 4s linear 8s forwards, none";
  smokecloud1.style.animation =
    "cloud2 1s linear 1s forwards, shake-1 500ms linear infinite";
  smokecloud2.style.animation =
    "cloud2 1s linear 1s forwards, shake-2 500ms linear infinite";
  smokecloud1half.style.animation =
    "cloud2 1s linear 2.5s forwards, shake-3 500ms linear infinite";
  smokecloud2half.style.animation =
    "cloud2 1s linear 3s forwards, shake-4 500ms linear infinite";
  smokecloud3.style.animation =
    "cloud2 1s linear 3s forwards, shake-5 500ms linear infinite";
  smokecloud4.style.animation =
    "cloud2 1s linear 3.5s forwards, shake-6 500ms linear infinite";
  smokeclouddark1.style.animation =
    "cloud2 1s linear 4.5s forwards, shake-7 500ms linear infinite";
  smokeclouddark2.style.animation =
    "cloud2 1s linear 4s forwards, shake-8 500ms linear infinite";
  smokecloud5.style.animation =
    "shake1 500ms linear 3s infinite, cloud2 1s linear 5s forwards";
  smokecloud6.style.animation =
    "shake2 500ms linear 3.5s infinite, cloud2 1s linear 5s forwards";
  smokecloud7.style.animation =
    "cloud2 1s linear 6s forwards, shake4 500ms linear infinite";
  smokecloud8.style.animation =
    "cloud2 1s linear 6.5s forwards, shake3 500ms linear infinite";
  smokecloud9.style.animation =
    "cloud2 1s linear 7s forwards, shake5 500ms linear infinite";
  smokecloud10.style.animation =
    "cloud2 1s linear 7.5s forwards, shake6 500ms linear infinite";
  smokecloud11.style.animation =
    "cloud2 1s linear 8s forwards, shake7 500ms linear infinite";
  smokecloud12.style.animation =
    "cloud2 1s linear 9.5s forwards, shake8 800ms linear infinite";
  smokecloud13.style.animation =
    "cloud2 1s linear 9s forwards, shake9 800ms linear infinite";
  smokecloud14.style.animation =
    "cloud2 1s linear 9s forwards, shake10 800ms linear infinite";
  firecloud1.style.animation =
    "cloud2 1s linear 8s forwards, shake11 800ms linear infinite";
  firecloud2.style.animation =
    "cloud2 1s linear 8s forwards, shake12 800ms linear infinite";
  firecloud3.style.animation =
    "cloud2 1s linear 8s forwards, shake13 800ms linear infinite";
  firel.style.animation = "flame 1s linear 8s forwards, none";
  rocketVidContainer.style.animation = "rocketvid 30s linear 9s forwards, none";
};

let grow = function () {
  rocketVid.style.width = "1000px";
  rocketVid.style.transition = "0.3s";
  rocketVid.style.top = "-500px";
  rocketMan.style.background = "#000";
  rocketMan.style.transition = "0.3s";
  introContainer.style.background = "#000";
  introContainer.style.transition = "0.3s";
  introp.style.color = "rgba(255, 255, 240, 0)";
};

let sizeNormal = function () {
  rocketVid.style.width = "400px";
  rocketVid.style.transition = "0.3s";
  rocketVid.style.top = "-0px";
  rocketMan.style.background = "rgb(20, 19, 19)";
  rocketMan.style.transition = "0.3s";
  introContainer.style.background = "rgb(19, 18, 18)";
  introContainer.style.transition = "0.3s";
  introp.style.color = "ivory";
  introp.style.transition = "0.3s";
};

// Rocket BTN Event Listeners
rocketBtn.addEventListener("click", launch);
// Video in Header
videoPlayer.addEventListener("click", grow);
videoPlayer.addEventListener("dblclick", sizeNormal);
