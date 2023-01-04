
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

// An empty array to store buttonPresses per game - WORKS
  buttonPresses = [];

// Add each game button clicked to buttonPresses array.Calculate the sum of array and change the totalCount innerHTML to that value
  const thisButton = document.querySelectorAll(".game-btn");
    if (thisButton.length !== 0) {
      for (var i = 0; i < thisButton.length; i++) {
        thisButton[i].addEventListener("click", function() {
          let buttonClicked = this.id; // Number(moose); returns 45
          let addValue = buttonClicked;
          buttonPresses.push(addValue);
          document.querySelector(".totalCount").innerHTML = "Total = " + buttonPresses;
        })
      }
    }

// Show "You Win" in total section when total is equal to or greater than 100 - does not work
  // buttonPresses might need to be updated when the total count value gets figured out
  if (buttonPresses >= 100) {
    document.querySelector(".totalCount").innerHTML = "You Win!";
    setTimeout(function() {
      $("#winModal").modal("show");
      startOver();
    }, 2000);
  }

// Show "You Win!" in total section when the man button is pressed - WORKS
  document.querySelector("#man").addEventListener("click",  function() {
    document.querySelector(".totalCount").innerHTML = "You Win!";
    setTimeout(function() {
      $("#winModal").modal("show");
      startOver();
    }, 2000);
  })

// Make Cemetary button disply oops... and after delay bring total to zero again/reset game - WORKS
  document.querySelector(".cemetary").onclick = function() {
    document.querySelector(".totalCount").innerHTML = "Oops, back to zero";
    setTimeout(function() {
      startOver();
    }, 1000);
  }

// Undo previous addition to gamePresses array - works for removing last, but html just changes to the animal name like in the original addition to the array
  document.querySelector(".undo").onclick = function() {
    buttonPresses.pop();
    document.querySelector(".totalCount").innerHTML = "Total = " + buttonPresses;
    if (buttonPresses.length < 1) {
      document.querySelector(".totalCount").innerHTML = "Total = 0";
    }
  }

// Reset game by wiping out gamePresses array and setting total to zero - WORKS
  function startOver() {
    document.querySelector(".totalCount").innerHTML = "Total = 0";
    buttonPresses = [];
  }
  document.querySelector(".reset").onclick = function() {
    startOver();
  }

// Add a sound on button press - WORKS
  $(".btn, .form-check-input").click(function() {
    let buttonSound = new Audio("snd/click-sound.mp3");
    buttonSound.play();
  })

// Add a vibration on button press on mobile devices - does not work
  // $(".btn").click(function() {
  //   window.navigator.vibrate(300);
  // })
  const buttonClick = document.querySelector(".btn");

    buttonClick.addEventListener("click", function() {
      navigator.vibrate(100);
    });

// Silence sound based on settings toggle positions - does not work
  // if buttonSound.[play() == true {
  //   $(".soundSwitch").click;
  // }

// Stop vibration based on settings toggle switch - does not work