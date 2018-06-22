/*
 * Create a list that holds all of your cards
 */
const cards = document.querySelectorAll('.card i');
const deck = document.getElementById('deck');
console.log(cards);  // This is for my reference to see the list of cards in the js console

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

/* set up the event listener for a card. If a card is clicked:
     - display the card's symbol (put this functionality in another
     function that you call from this one) */

// set up the check to see if two cards are revealed


// set up the function to reveal a card
const look = function() {
     $(this).toggleClass('open');
     $(this).toggleClass('show');
};

const check = function() {
const turned = document.getElementsByClassName('open');
     console.log(turned.length);
     if(turned.length === 2) {
          let card1 = document.getElementsByClassName('open').item(0);
          let card1Style = card1.firstElementChild.classList.item(1);
          let card2 = document.getElementsByClassName('open').item(1);
          let card2Style = card2.firstElementChild.classList.item(1);
          console.log(card1Style);
          console.log(card2Style);
          if(card1Style === card2Style) {
               card1.classList.remove('open','show');
               card2.classList.remove('open','show');
               card1.classList.add('match');
               card2.classList.add('match');
               card1 = '';
               card2= '';
               card1Style = '';
               card2Style = '';
          } else {
          console.log("fail....try again");
          setTimeout(function() {
          card1.classList.remove('open','show');
          card2.classList.remove('open','show');
          }, 2000);
     }} else {
          console.log("Please choose a card");
     }
};

// set up the function to respond to user selection
const select = function(event) {
     $('ul').on('click', 'li', look);
     setTimeout(function() {
          check()}, 2000);
};

// Listen for a click on a card
deck.addEventListener('click', select, false);


 /*  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
