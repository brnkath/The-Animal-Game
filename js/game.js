
// An empty array to store buttonPresses per game
  let buttonPresses = [];

// Add each game button clicked to buttonPresses array. Calculate the sum of array and change the totalCount innerHTML to that value. Also show "You Win" in total section when total is equal to or greater than 100
  const thisButton = document.querySelectorAll(".game-btn");
    if (thisButton.length !== 0) {
      for (let i = 0; i < thisButton.length; i++) {
        thisButton[i].addEventListener("click", function() {
          let buttonClicked = this.value;
          buttonPresses.push(buttonClicked);
          const totalValue = buttonPresses.map(num => parseInt(num, 10)).reduce((acc, currentValue) => acc + currentValue, 0);
          document.querySelector(".totalCount").innerHTML = "Total = " + totalValue;
          if (totalValue >= 100) {
            document.querySelector(".totalCount").innerHTML = "You Win!!";
            setTimeout(function() {
              $("#winModal").modal("show");
              startOver();
            }, 2000);
          }
        })
      }
    }

// Show "You Win!" in total section when the man button is pressed
  document.querySelector("#man").addEventListener("click",  function() {
    document.querySelector(".totalCount").innerHTML = "You Win!!";
    setTimeout(function() {
      $("#winModal").modal("show");
      startOver();
    }, 2000);
  })

// Make Cemetary button disply oops... and after delay bring total to zero again/reset game
  document.querySelector(".cemetary").onclick = function() {
    document.querySelector(".totalCount").innerHTML = "Oops, back to zero";
    setTimeout(function() {
      startOver();
    }, 2000);
  }

// Undo previous addition to gamePresses array
  document.querySelector(".undo").onclick = function() {
    buttonPresses.pop();
    let newValue = buttonPresses.map(num => parseInt(num, 10)).reduce((acc, currentValue) => acc + currentValue, 0);
    document.querySelector(".totalCount").innerHTML = "Total = " + newValue;
    if (buttonPresses.length < 1) {
      document.querySelector(".totalCount").innerHTML = "Total = 0";
    }
  }

// Reset game by wiping out gamePresses array and setting total to zero
  function startOver() {
    document.querySelector(".totalCount").innerHTML = "Total = 0";
    buttonPresses = [];
  }
  document.querySelector(".reset").onclick = function() {
    startOver();
  }

  // Toggle sound on/off with button press and change inner HTML based on state
  let buttonSound = new Audio("snd/click-sound.mp3");
  let volume = 1;

  function playButtonSound() {
    if (volume > 0) {
      buttonSound.currentTime = 0;
      buttonSound.play();
    }
  }

  $(".btn").click(playButtonSound);

  let toggleSoundButton = document.getElementById("toggleSound");

  toggleSoundButton.addEventListener("click", function() {
    if (volume > 0) {
      toggleSoundButton.innerHTML = "Sound On";
      volume = 0;
    } else {
      toggleSoundButton.innerHTML = "Sound Off";
      volume = 1;
    }
  });

