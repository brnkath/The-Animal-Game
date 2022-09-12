
let dog = 1;
let cat = 1;
let bird = 1;
let squirrel = 1;
let rabbit = 1;
let cow = 1;
let horse = 2;
let deer = 4;
let fox = 10;
let coyote = 10;
let possum = 15;
let raccoon = 15;
let skunk = 20;
let bear = 35;
let moose = 45;
let wolf = 50;
let man = 100;
let totalCount = "Total = " + 0;
let cemetary = totalCount * 0;
// For testing
let buttonPress = "Total = " + 5;

// Start with empty array
  // gamePresses [

  // ]

// Total button presses so far, and display in total section
  // buttonPresses [

  // ]

// Making a button change total text for testing
  document.querySelector(".game-btn").onclick = function() {
    let buttonClicked = this.id;
    document.querySelector(".totalCount").innerHTML = "Total = " + buttonClicked;
  }


// Show "You Win" when total is equal to or greater than 100. Show "Oops, back to zero" when Cemetary is pressed and after short delay change total back to zero.
  if (totalCount >= 100) {
    document.querySelector(".totalCount").innerHTML = "You Win!";
  }

  document.querySelector(".cemetary").onclick = function() {
    document.querySelector(".totalCount").innerHTML = "Oops, back to zero";
    setTimeout(function() {
      document.querySelector(".totalCount").innerHTML = "Total = 0";
    }, 3000);
  }

// Undo previous addition to gamePresses array


// Reset game by wiping out gamePresses array and setting total to zero


// Add a sound and vibration on button press
  $(".btn").click(function() {
    let buttonSound = new Audio("snd/click-sound.mp3");
    buttonSound.play();
  })

  document.querySelector(".btn").onclick = function() {
    window.navigator.vibrate(300);
  }

// Silence sound and vibration based on settings toggle positions