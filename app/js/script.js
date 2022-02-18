// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("bubbly-button");

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


var animateButton = function(e) {

	e.preventDefault;
	//reset animation
	e.target.classList.remove('animate');
	
	e.target.classList.add('animate');
	setTimeout(function(){
	  e.target.classList.remove('animate');
	},700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
	bubblyButtons[i].addEventListener('click', animateButton, false);
  }