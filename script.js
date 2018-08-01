"use strict";

$(document).ready (() => {

generateCards(16);

function generateCards(numOfCards) {
    numOfCards = numOfCards / 2;
    console.log(numOfCards);
    for(let i = 1; i <= numOfCards; i++) {
        for(let j = 0; j < 2; j++) {
            $(".cardDeck").append(`<div class="card back" value="${i}">${i}</div>`);
        }
    }
}
});