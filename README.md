# QuickMem

![Responsive screenshot](/assets/images/readme-images/responsive-screen.jpg)

# The purpose with this project

QuickMem is a fast challenging memory game with the purpose to challenge the player to reach a perfect game of 10 pairs. The user interface is deliberately kept clean and free from images and abundant graphics so that the player is allowed to focus on the actual game. The difficult level of the game is set to a level so that most players wont succeed to win the game on their first tries.

The game has three screens: Start, Game, End.

Target audience: All individuals that wants a challenge.

This project is the second of five projects that needs to be completed in order to receive a diploma in Software Development from The Code Institute.

Required technologies are HTML5, CSS3 and JavaScript.

A live version of the project can be found here - https://pelikantapeten.github.io/p2-quickmem/

# Table of Content

+ [UX](#ux "UX")
  + [User Demographic](#user-demographic "User Demographic")
  + [User Stories](#user-stories "User Stories")
    + [New Players](#new-players "New Players")
    + [Old Players](#old-players "Old Players")
  + [Player Goals](#player-goals "Player")
  + [Project Requirements](#project-requirements "Project Requirements")
  + [Design](#design "Design")
    + [Design Discovery Phase](#design-discovery-phase "Design Discovery Phase")
    + [Colours](#colours "Colours")
    + [Typography](#typography "Typography")
    + [Images](#images "Images")
+ [Features](#features "Features")
  + [Existing Features](#existing-features "Existing Features")
    + [Start Screen](#start-screen "Start Screen")
    + [Game Screen](#game-screen "Game Screen")
    + [End Screen](#end-screen "End Screen")
  + [Features Left to Implement](#features-left-to-implement "Features Left to Implement")
+ [Technologies used](#technologies-used "Technologies used")
+ [Testing](#testing "Testing")
  + [Validator Testing](#validator-testing "Validator Testing")
  + [Unfixed Bugs](#unfixed-bugs "Unfixed Bugs")
+ [Development and Deployment](#development-and-deployment "Development and Deployment")
+ [Content](#content "Content")
+ [Media](#media "Media")
+ [Credits](#credits "Credits")

## UX

### User Demographic

This game is ment for:

 - All individuals, regarding age, that wants to play a challenging game.

### User Stories

The user stories between new and old players differ just slightly since it is a simple game.

#### New players

 - I want to try the game.
 - I want to increase the number of pairs compared to my last game.
 - I want to win the game
 - I want to bet the game with a lower number of tries than my last game.

#### Old players

 - I want to increase the number of pairs compared to my last session.
 - I want to bet the game with a lower number of tries than my last session.
 - I want to win the game.

### Player goals

 - To find all 10 pairs before the time runs out.

### Project Requirements

 - To build an interactive front-end site that responds to user actions. The user should engage actively by altering data and how the site displays. The development process needs to be well documented through a version controls system such as GitHub and contain HTML5, CSS3 and JavaScript.

### Design

During the thought process regarding design a decision was taken to keep the design as minimalistic as possible. Being a memory game the concept of ”less is more” was adapted with the purpose to minimise player distraction. The game is ment to be a fast playing game and there for it does not contain any animations that could lead to frustration from a player perspective.

#### Design Discovery Phase

Balsamiq was used as a tool during the discovery phase in order to understand how the design could be in correlation to gamin experience. Several different colour palettes where tested before the final choice was made. Simplicity and friendly were two keywords used to determine the final design suggestion.

The game consists of three screens, Start, Game and End. The final version of the wireframe and design are presented below this text.

Start Screen

![Start Screen](/assets/images/readme-images/wireframe-start.jpg)

Game Screen

![Game Screen](/assets/images/readme-images/wireframe-game.jpg)

End Screen

![End Screen](/assets/images/readme-images/wireframe-end.jpg)

#### Colours

The colour palette was created using [Coolors](https://coolors.co/).

![Colour Palette](/assets/images/readme-images/colour-palette.png)

#### Typography

Font chosen for the project is [Balsamiq Sans](https://fonts.google.com/specimen/Balsamiq+Sans?query=balsam)

#### Images

The game does not contain any image elements. The game cards are using fonts from [Font Awesome](https://fontawesome.com/) as face value.

[Back to top](#quickmem)

## Features 

QuickMem consists of three game screens:

 - Start Screen
 - Game Screen
 - End Screen

QuickMem is a linear game and when the player presses start the game board is created and shuffled. The player ends up at the end screen at either a ”Win” or a ”Loss”.

### Existing Features

#### Start Screen

The Start Screen consists of a header and a paragraph that contains the games main title and the rules. Other elements are:

 - Text that tells player to enter name, this is optional
 - Input field for player name (optional)
 - Start button that takes the player to the main board and shuffles the deck.

![Start Screen](/assets/images/readme-images/start-screen.png)

#### Game Screen

The game screen has two elements:

 - Timer bar - Counts from 0 to 100 and graphically displays the counting by moving a bar from left to right. The darker colour of the bar makes the timer visible in ”the corner of the eye” of the player and he/she does not have to look away from the game board.

 - Game board - At start 20 cards with symbols are shuffled and distributed across the board. The game starts the moment the game screen is visible to the player.

![Game Screen](/assets/images/readme-images/game-screen.png)

#### End Screen

Quick game is a linear game and all players end up at the end screen either the loose or win. Messages differ depending on win or loss. If a player does not enter a player name the standard player name of the game appears. The end screen displays:

 - Header that tells the player if they won or lost.
 - Paragraph telling the player how many pairs they were able to match.
 - Paragraph telling the player how many tries it took to find the pairs.
 - Paragraph with two different messages depending on win/lose.
 - Play again button that generates a new game board and shuffles the cards.
 - Quit button that takes the player to the start screen

![About us Section part 1](/assets/images/readme-images/end-screen.png)

### Features Left to Implement

- Future version of this game will contain database with high scores.
- Two more game modes, one harder and one easier.

[Back to top](#quickmem)

## Technologies used

- [HTML](https://en.wikipedia.org/wiki/HTML)
- [CSS](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/javascript)

## Testing 

- Tecnichal testing
- Game testing

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fpelikantapeten.github.io%2Fp2-quickmem%2F)

![W3C HTML Validator](/assets/images/readme-images/html-validator.png)

- CSS
  - No errors were returned when passing through the official [(Jigsaw validator)](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fpelikantapeten.github.io%2Fp2-quickmem%2Fassets%2Fcss%2Fstyle.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

  - CSS validation passes with no errors but contains a warning. The warning indicates that the background colour and font colour of the class ”memory-card” are the same. This is on purpose since the game function to check memory cards depend on colour change. 

![Jigsaw validator](/assets/images/readme-images/css-validator.png)

- JavaScript
  - No errors or warnings was returned using [(JSHint)](https://jshint.com/) with "New JavaScript features (ES6)" activated in the configuration.

![JSHint](/assets/images/readme-images/jshint-screen.png)

- Lighthouse testing

![Lighthouse testing score](/assets/images/readme-images/lighthouse.png)

### Unfixed Bugs

1. Bad Array - No clue on how to select specific items by name.
  - Array only console.logs [object object] after changes. Not working.
  - Did changes to existing array to add name attribute.
2. Game card divs are not responding to clicks.
3. Got tired of the console error due to missing favicon. Added the one from Love Maths for now.
4. Cards won't change color of i when clicked
5. cards wont compare (Object to string) - Not working, adding data-id to cards so that these can be compared.
6. game board doubles number of cards when "play again" is pressed.
  Created function that clears game-board.
7. Cards are not re-shuffeling upon restart.
8. When game is won an endless loop is created.
9. If you double klick a card it sometimes seems to not turn back.


 [Back to top](#quickmem)

## Development and Deployment

The development environment used for this project was GitPod. To track the development stage and handle version control regular commits and pushes to GitHub has been conducted. The GitPod environment was created using a template provided by Code Institute.

The live version of the project is deployed at GitHub pages.

The procedure for deployment followed the "Creating your site" steps provided in [GitHub Docs.](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

1. Log into GitHub.
2. Locate the GitHub Repository that shall be deployed live.
3. At the top of the repository, select Settings from the menu items.
4. Scroll down the Settings page to the ”GitHub Pages" section and click on the ”Check it out here!”
5. At the ”Source” section choose ”main” as Branch and root as folder and click ”Save”
6. The website will deploy and the pages refreshes to provide the live link to the project.

The live link can be found here - https://pelikantapeten.github.io/p2-quickmem/

## Content 

- All text content in this game has been produced by the author.
- Icons [Font Awesome](https://fontawesome.com/)

## Media

Apart from Google Fonts and FontAwesome no external media are used in the game.

## Credits 

### For code inspiration, design inputs, help and advice.

I have consulted numerous websites, individuals and slack channels to get support for the code. No code block is directly copied but some generates from information I gathered from other developers and sites:

 - [Mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) for information about Arrays and also identifying bugs.
 - [Code Institute - Love Running](https://github.com/Code-Institute-Solutions/love-running-2.0-sourcecode) for inspiration to game footer.
 - [Code Institute - Love Maths](https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode) for inspiration to design of user interface.
 - [DevelopedByEd](https://developedbyed.com/) that taught me in his vides on how to generate a board of cards and display it as a CSS grid.
 - [W3 Schools](https://www.w3schools.com/jsref/met_element_addeventlistener.asp) for understanding Event Listeners. 
 - [W3 Schools](https://www.w3schools.com/w3css/w3css_progressbar.asp) for the developing of my progress bar on the main game screen.

### Acknowledgment

 - [Lauren-Nicole Popich](https://www.linkedin.com/in/lauren-nicole-popich-1ab87539/) My incredible fellow student. Thank you for all discussions, testing, comments, insights and support and leading me out of frustration.
 - [Martina Terlevic](https://www.linkedin.com/in/martinaterlevic/) My fantastic mentor at Code Institute, thank you for your support, feedback and humor.

 And to all the rest of my fellow student that have tested the actual game and provided me with feedback on playability.

[Back to top](#quickmem)
