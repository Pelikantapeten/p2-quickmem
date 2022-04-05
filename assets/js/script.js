// Finsih loading the DOM before game can start

document.addEventListener("DOMContentLoaded", () => {

const gameBoard = document.getElementById('main-screen');

/**
 * Creates an array of 20 icons that will form the base of the card deck
 */
const iconArray = [
    'fa-solid fa-brackets-square',
    'fa-solid fa-brackets-round',
    'fa-solid fa-brackets-curly',
    'fa-solid fa-code',
    'fa-solid fa-bug',
    'fa-solid fa-code-simple',
    'fa-solid fa-code-branch',
    'fa-solid fa-code-fork',
    'fa-solid fa-bug-slash',
    'fa-solid fa-laptop-code',
    'fa-solid fa-brackets-square',
    'fa-solid fa-brackets-round',
    'fa-solid fa-brackets-curly',
    'fa-solid fa-code',
    'fa-solid fa-bug',
    'fa-solid fa-code-simple',
    'fa-solid fa-code-branch',
    'fa-solid fa-code-fork',
    'fa-solid fa-bug-slash',
    'fa-solid fa-laptop-code',
];

/**
 * Randomizes the cards in the card array - learned 
 * how to do it at https://www.w3schools.com/js/js_array_sort.asp
 */
const cardDeck = iconArray.sort(() => 0.5 - Math.random());

/**
 * Creates and places the deck of cards on the game board.
 */
function layOutMemoryCards() {
    for (let i = 0; i < cardDeck.length; i++) {
        var cardDiv = document.createElement('div');
        cardDiv.setAttribute('class', 'memory-card');
        cardDiv.setAttribute('id', i);
        cardDiv.innerHTML = (`<i class="${cardDeck[i]}"></i>`);
        gameBoard.appendChild(cardDiv);
    }
}

layOutMemoryCards();

});