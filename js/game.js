
// An empty array to store buttonPresses per game - WORKS
  let buttonPresses = [];

// Add each game button clicked to buttonPresses array. Calculate the sum of array and change the totalCount innerHTML to that value. Also show "You Win" in total section when total is equal to or greater than 100 - WORKS
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

// Show "You Win!" in total section when the man button is pressed - WORKS
  document.querySelector("#man").addEventListener("click",  function() {
    document.querySelector(".totalCount").innerHTML = "You Win!!";
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
    }, 2000);
  }

// Undo previous addition to gamePresses array - WORKS
  document.querySelector(".undo").onclick = function() {
    buttonPresses.pop();
    let newValue = buttonPresses.map(num => parseInt(num, 10)).reduce((acc, currentValue) => acc + currentValue, 0);
    document.querySelector(".totalCount").innerHTML = "Total = " + newValue;
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

// Toggle sound on button press -
  $(".btn").click(function() {
    let buttonSound = new Audio("snd/click-sound.mp3");
    buttonSound.play();
  }) //Add an if else to change the css of On or OFF associated with soundOff and soundOn classes

  const muteButton = document.getElementById('muteButton');

  muteButton.addEventListener('click', (event) => {
    const audioElement = document.querySelector('audio');

    audioElement.toggleAttribute('muted');

    if (audioElement.muted) {
      muteButton.textContent = 'Unmute';
    } else {
      muteButton.textContent = 'Mute';
    }
  });

// Make orientation modal open when in landscape on mobile
  switch (screen.orientation.type) {
    case "landscape-primary":
      alert("Landscape-primary!!");
      break;
    case "landscape-secondary":
      alert("Landscap-primary!!");
      break;
    case "portrait-secondary":
    case "portrait-primary":
      alert("Portrait!!");
      break;
      default:
        console.log("The orientation API isn't supported in this browser :(");
}
