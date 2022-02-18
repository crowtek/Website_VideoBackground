// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("playButton");

// Pause and play the video, and change the button text
function vidFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}