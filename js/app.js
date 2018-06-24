/*
 * Create a list that holds all of your cards
 */

// Define variables
const deck = document.getElementById('deck');
const cards = document.querySelectorAll('.card');
const turned = document.getElementsByClassName('open');

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

shuffle(cards);




// set up the function to reveal a card
const look = function(guess) {
     $(guess).toggleClass('open');
     setTimeout(function() {
          $(guess).toggleClass('show');
     }, 200);
};

// set up the check to see if two cards are revealed
const check = function() {
     if(turned.length === 2) {  // if 2 cards match, change class to match
          let card1 = document.getElementsByClassName('open').item(0);
          let card1Style = card1.firstElementChild.classList.item(1);
          let card2 = document.getElementsByClassName('open').item(1);
          let card2Style = card2.firstElementChild.classList.item(1);
          if(card1Style === card2Style) {  // if the 2 cards match, lock the view
               setTimeout(function() {  // pause to view before locking the match
               card1.classList.remove('open','show');
               card2.classList.remove('open','show');
               card1.classList.add('match');
               card2.classList.add('match');
               card1 = '';  // reset the variables for the selected elements
               card2= '';
               card1Style = '';
               card2Style = '';
          }, 600);
     } else {  // if not a match, reset the cards after a pause to view
          setTimeout(function() {
          card1.classList.remove('open','show');
          card2.classList.remove('open','show');
     }, 600);
     }}
};

// set up the function to respond to user selection
const select = function(guess) {
     if(turned.length < 2) {
     look(guess);
     setTimeout(function() {
          check()}, 600);
}};

/* set up the event listener for a card. If a card is clicked:
- display the card's symbol (put this functionality in another
function that you call from this one) */

// Listen for a click on a card
deck.addEventListener('click', function(e) {
     const guess = e.target;
     if(guess.classList == 'card') {
          select(guess);
     }
}, true);


 /*  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
