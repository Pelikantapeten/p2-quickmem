// Finish loading the DOM before game can start

document.addEventListener("DOMContentLoaded", () => {
  
  //Start button on start screen
  var startButton = document.getElementById("start-button");
  startButton.addEventListener("click", collectPlayerName);
  startButton.addEventListener("click", hideStartScreen);
  startButton.addEventListener("click", showGameScreen);
  startButton.addEventListener("click", mainGame);


  //Play again button on end screen
  var playAgain = document.getElementById("start-again-button");
  playAgain.addEventListener("click", clearGameCards);
  playAgain.addEventListener("click", clearGameArrays);
  playAgain.addEventListener("click", hideEndScreen);
  playAgain.addEventListener("click", showGameScreen);
  playAgain.addEventListener("click", mainGame);

  //Quit game button on end screen
  var quit = document.getElementById("quit-button");
  quit.addEventListener("click", clearGameCards);
  quit.addEventListener("click", clearGameArrays);
  quit.addEventListener("click", hideEndScreen);
  quit.addEventListener("click", showStartScreen);

  function collectPlayerName() {
    let playerName = document.getElementById("name-box").value;

     if (playerName === ("")) {
      document.getElementById("player-name").innerHTML = "Warren Robinett";
     } else {
        document.getElementById("player-name").innerHTML = (playerName);
     }
    
  }

});
  
  /**
   * An array with 20 favIcons (class names)
   */
  const iconArray = [
    'fa-solid fa-brackets-square',
    'fa-solid fa-brackets-square',
    'fa-solid fa-brackets-round',
    'fa-solid fa-brackets-round',
    'fa-solid fa-brackets-curly',
    'fa-solid fa-brackets-curly',
    'fa-solid fa-code',
    'fa-solid fa-code',
    'fa-solid fa-bug',
    'fa-solid fa-bug',
    'fa-solid fa-code-simple',
    'fa-solid fa-code-simple',
    'fa-solid fa-code-branch',
    'fa-solid fa-code-branch',
    'fa-solid fa-code-fork',
    'fa-solid fa-code-fork',
    'fa-solid fa-bug-slash',
    'fa-solid fa-bug-slash',
    'fa-solid fa-laptop-code',
    'fa-solid fa-laptop-code',   
  ];

  /**
   * Hides the start screen
   */
  function hideStartScreen() {
    let toggleStartScreen = document.getElementById("start-wrapper");
    if (toggleStartScreen.style.display === "none") {
      toggleStartScreen.style.display = "block";
    } else {
      toggleStartScreen.style.display = "none";
    }
  }

  /**
   * Shows the start screen
   */
   function showStartScreen() {
    let toggleStartScreen = document.getElementById("start-wrapper");
    if (toggleStartScreen.style.display === "block") {
      toggleStartScreen.style.display = "none";
    } else {
      toggleStartScreen.style.display = "block";
    }
  }

  /**
   * Shows the main game screen
   */
   function showGameScreen() {
    let toggleGameScreen = document.getElementById("main-wrapper");
    if (toggleGameScreen.style.display === "block") {
      toggleGameScreen.style.display = "none";
    } else {
      toggleGameScreen.style.display = "block";
    }
  }

  /**
   * Hides the main game screen
   */
   function hideGameScreen() {
    let toggleGameScreen = document.getElementById("main-wrapper");
    if (toggleGameScreen.style.display === "none") {
      toggleGameScreen.style.display = "block";
    } else {
      toggleGameScreen.style.display = "none";
    }
  }

  /**
   * Shows the end screen
   */
   function showEndScreen() {
    let toggleEndScreen = document.getElementById("end-wrapper");
    if (toggleEndScreen.style.display === "block") {
      toggleEndScreen.style.display = "none";
    } else {
      toggleEndScreen.style.display = "block";
    }
  }

  /**
   * Hides the end screen
   */
   function hideEndScreen() {
    let toggleEndScreen = document.getElementById("end-wrapper");
    if (toggleEndScreen.style.display === "none") {
      toggleEndScreen.style.display = "block";
    } else {
      toggleEndScreen.style.display = "none";
    }
  }

  /**
   * Clears the game board of cards upon restart (Play again)
   */
  function clearGameCards () {
    let oldGameBoard = document.getElementById("main-screen");
    oldGameBoard.innerHTML = "";
  }


  /**
   * Creates, shuffles and places the deck of cards on the game board.
   */
  function layOutMemoryCards() {
    var cardDeck = iconArray.sort(() => 0.5 - Math.random());
      for (let i = 0; i < cardDeck.length; i++) {
          let cardDiv = document.createElement('div');
          let gameBoard = document.getElementById('main-screen');
          cardDiv.setAttribute('class', 'memory-card');
          cardDiv.setAttribute('id', i);
          cardDiv.setAttribute('data-id', (cardDeck[i]));
          cardDiv.innerHTML = (`<i class="${cardDeck[i]}"></i>`);
          cardDiv.addEventListener('click', checkCard);
          gameBoard.appendChild(cardDiv);   
      }
  }

  /**
   * Timer bar, sets time frame for game. 
   * I learned how to do one of these buy reading at:
   * https://www.w3schools.com/w3css/w3css_progressbar.asp
   */

  function gameTimer() {
    let bar = document.getElementById("countdown-bar");   
    let width = 0;
    let timeInterval = setInterval(frame, 250);
    function frame() {
      if (width >= 100) {
        clearInterval(timeInterval);
        hideGameScreen();
        document.getElementById('result').innerHTML = "Lost";
        document.getElementById('number-pairs').innerHTML = (cardsPaired.length);
        document.getElementById('total-turns').innerHTML = (cardsPaired.length + cardsFailed.length);
        showEndScreen();
      } else if (cardsPaired.length === 10) {
        clearInterval(timeInterval);  
        endGame();
      } else {
        width++; 
        bar.style.width = width + '%'; 
        bar.innerHTML = width * 1;
      }
    }
  }

  /**
   * main game function
   */
 function mainGame() {
  layOutMemoryCards();
  gameTimer();

 }

 /**
  * End game function
  */
 function endGame() {
   hideGameScreen();
   showEndScreen();
   document.getElementById('result').innerHTML = "Won";
   document.getElementById('number-pairs').innerHTML = (cardsPaired.length);
   document.getElementById('total-turns').innerHTML = (cardsPaired.length + cardsFailed.length);
   document.getElementById('winning-text').innerHTML = "You should brag about this!";

 }
  

 /**
  * Arrays for deck, matchmaking and result
  */
 var selectedCardsValue = [];
 var selectedCardsId = [];
 var cardColor = [];
 var cardsPaired = [];
 var cardsFailed = [];

 
 /**
  * Function for clearing arrays
  */
 function clearGameArrays() {
  cardsPaired = [];
  cardsFailed = [];
 }

 /**
  * Highlights the value of the card and collects card id and card data-id
  */
function checkCard() {
  var checkedCardId = this.getAttribute('id');
  selectedCardsId.push(checkedCardId);
  var turnedCard = document.getElementById(checkedCardId);
  cardColor.push(turnedCard);
  var cardValue = this.getAttribute('data-id');
  selectedCardsValue.push(cardValue);
  turnedCard.style.color = "black";

  if (selectedCardsValue.length === 2) {
    setTimeout(checkForMatch, 200);
  }
}


/**
 * Check to see if it's a pair
 */
function checkForMatch() {
  var firstChoice = selectedCardsValue[0];
  var secondChoice = selectedCardsValue[1];

  if (firstChoice === secondChoice) {
    cardsPaired.push(1);
  } else {
    cardColor[0].style.color = "#D5A6BD";
    cardColor[1].style.color = "#D5A6BD";
    cardsFailed.push(1);
  }

  selectedCardsValue = [];
  selectedCardsId = [];
  cardColor = [];
}

