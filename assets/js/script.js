// Finsih loading the DOM before game can start

document.addEventListener("DOMContentLoaded", () => {
  let startButton = document.getElementById("start-button");
  startButton.addEventListener("click", hideStartScreen);
  startButton.addEventListener("click", showGameScreen);
  startButton.addEventListener("click", mainGame);

});
  
  /**
   * An array with 20 favIcons that also contains a name attribute
   */
  const iconArray = [
    'fa-solid fa-brackets-square" name="square"',
    'fa-solid fa-brackets-square" name="square"',
    'fa-solid fa-brackets-round" name="round"',
    'fa-solid fa-brackets-round" name="round"',
    'fa-solid fa-brackets-curly" name="curly"',
    'fa-solid fa-brackets-curly" name="curly"',
    'fa-solid fa-code" name="code"',
    'fa-solid fa-code" name="code"',
    'fa-solid fa-bug" name="bug"',
    'fa-solid fa-bug" name="bug"',
    'fa-solid fa-code-simple" name="simple"',
    'fa-solid fa-code-simple" name="simple"',
    'fa-solid fa-code-branch" name="branch"',
    'fa-solid fa-code-branch" name="branch"',
    'fa-solid fa-code-fork" name="fork"',
    'fa-solid fa-code-fork" name="fork"',
    'fa-solid fa-bug-slash" name="slash"',
    'fa-solid fa-bug-slash" name="slash"',
    'fa-solid fa-laptop-code" name="code"',
    'fa-solid fa-laptop-code" name="code"',   
  ];
  
 

  /**
   * Randomizes the cards in the card array - learned 
   * how to do it at https://www.w3schools.com/js/js_array_sort.asp
   */
  const cardDeck = iconArray.sort(() => 0.5 - Math.random());
  
  /**
   * Hides the start screen
   */
  function hideStartScreen() {
    var toggleStartScreen = document.getElementById("start-wrapper");
    if (toggleStartScreen.style.display === "none") {
      toggleStartScreen.style.display = "block";
    } else {
      toggleStartScreen.style.display = "none";
    }
  }

  /**
   * Shows the main game screen
   */
   function showGameScreen() {
    var toggleGameScreen = document.getElementById("main-wrapper");
    if (toggleGameScreen.style.display === "block") {
      toggleGameScreen.style.display = "none";
    } else {
      toggleGameScreen.style.display = "block";
    }
  }

  /**
   * Creates and places the deck of cards on the game board.
   */
  function layOutMemoryCards() {
      for (let i = 0; i < cardDeck.length; i++) {
          var cardDiv = document.createElement('div');
          var gameBoard = document.getElementById('main-screen');
          cardDiv.setAttribute('class', 'memory-card');
          cardDiv.setAttribute('id', i);
          cardDiv.innerHTML = (`<i class="${cardDeck[i]}></i>`);
          gameBoard.appendChild(cardDiv);
          /*cardDiv.addEventListener('click', checkCard);*/
      }
  }

  /**
   * Timer bar, sets time frame for game. 
   * I learned how to do one of these buy reading at:
   * https://www.w3schools.com/w3css/w3css_progressbar.asp
   */

  function timer() {
    var bar = document.getElementById("countdown-bar");   
    var width = 0;
    var timeInterval = setInterval(frame, 200);
    function frame() {
      if (width >= 100) {
        clearInterval(timeInterval);
      } else {
        width++; 
        bar.style.width = width + '%'; 
        bar.innerHTML = width * 1;
      }
    }
  }

 function mainGame() {
  layOutMemoryCards();
  timer();
 }