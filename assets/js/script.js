// Finsih loading the DOM before game can start

document.addEventListener("DOMContentLoaded", () => {
  
  var startButton = document.getElementById("start-button");
  startButton.addEventListener("click", hideStartScreen);
  startButton.addEventListener("click", showGameScreen);
  startButton.addEventListener("click", mainGame);

});
  

  
  /**
   * An array with 20 favIcons that also contains a name attribute
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
   * Randomizes the cards in the card array - learned 
   * how to do it at https://www.w3schools.com/js/js_array_sort.asp
   */
  const cardDeck = iconArray.sort(() => 0.5 - Math.random());
  
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
   * Creates and places the deck of cards on the game board.
   */
  function layOutMemoryCards() {
      for (var i = 0; i < cardDeck.length; i++) {
          var cardDiv = document.createElement('div');
          var gameBoard = document.getElementById('main-screen');
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

  function timer() {
    let bar = document.getElementById("countdown-bar");   
    let width = 0;
    let timeInterval = setInterval(frame, 250);
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

  /**
   * main game function
   */
 function mainGame() {
  layOutMemoryCards();
  timer();
 }

 /**
  * Arrays for matchmaking
  */
 var selectedCardsValue = [];
 var selectedCardsId = [];
 var cardColor = [];
 var cardsPaired = [];
 
 
 
 /**
  * Highlights the value of the card and collects card id and card name
  */
function checkCard() {
  var checkedCardId = this.getAttribute('id');
  selectedCardsId.push(checkedCardId);
  var turnedCard = document.getElementById(checkedCardId);
  cardColor.push(turnedCard);
  var cardValue = this.getAttribute('data-id');
  //var checkedCardInnerElement = document.getElementById(checkedCardId);
  //var cardValue = checkedCardInnerElement.getElementsByTagName("i");
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
    console.log("pair");
  } else {
    cardColor[0].style.color = "#D5A6BD";
    cardColor[1].style.color = "#D5A6BD";
  }

  selectedCardsValue = [];
  selectedCardsId = [];
  cardColor = [];
}


