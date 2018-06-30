/*
 * Create a list that holds all of your cards
 */

let cardPic = ['diamond','diamond',
               'paper-plane-o','paper-plane-o',
               'anchor','anchor',
               'bolt','bolt',
               'cube','cube',
               'leaf','leaf',
               'bicycle','bicycle',
               'bomb','bomb'];

// Define variables
const deck = document.getElementById('deck');
const turned = document.getElementsByClassName('open');
let cards = document.querySelectorAll('.card');

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(cards) {
    var currentIndex = cardPic.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }
    return cards;
}

// shuffle the cards prior to di
cardPic = shuffle(cardPic);

// now, deal the cards
cardPic.forEach(function(item, index, array) {
     // for each image, creat a card element
     const cardEl = document.createElement('li');
     // for each card element, add the class
     cardEl.classList.add("card");
     // add the card to the page
     deck.append(cardEl);

     // for each card, create the image element
     const iEl = document.createElement('i');
     // create the class name for each image
     const iClass =  cardPic[index];
     // for each image, add the class
     iEl.classList.add("fa","fa-"+iClass);
     // add the image to the card created above
     cardEl.append(iEl);
});


// reveal a card
const look = function(guess) {
     $(guess).toggleClass('open');
     setTimeout(function() {
          $(guess).toggleClass('show');
     }, 200);
};

// check to see if two cards are revealed
const check = function() {
     if(turned.length === 2) {
          // retrieve the image class values of each card
          let card1 = document.getElementsByClassName('open').item(0);
          let card1Style = card1.firstElementChild.classList.item(1);
          let card2 = document.getElementsByClassName('open').item(1);
          let card2Style = card2.firstElementChild.classList.item(1);

          // if the 2 cards match, change class to 'match' to lock the view
          if(card1Style === card2Style) {
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
               card1.classList.add('close');
               card2.classList.add('close');
          }, 200);
          setTimeout(function() {
               card1.classList.remove('open','show');
               card2.classList.remove('open','show');
          }, 400);
          setTimeout(function() {
               card1.classList.remove('close');
               card2.classList.remove('close');
          }, 700);
     };
};
};

// respond to user selection
const select = function(guess) {
     if(turned.length < 2) {  // ignore selection of more than 2 cards
     look(guess); // look at the selected card
     setTimeout(function() {  // pause for view
          check()}, 600);  // check for match
}};

/* set up the event listener for a card. If a card is clicked:
- display the card's symbol (put this functionality in another
function that you call from this one) */

// when user clicks on a card, launch select() on the guess to look & check the card
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
