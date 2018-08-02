"use strict";

$(document).ready (() => {

    function fillGrid(arr) {
        for (let i = 0; i < arr.length; i++) {
            $(".card_deck").append(arr[i]);
        }
    }

    class CardDeck {
        constructor(numOfCards) {
            this.deck = [];
            this.numOfCards = numOfCards;
        }
        generateCards(numOfCards) {
            numOfCards = numOfCards / 2;
            const deck = [];
            for(let i = 1; i <= numOfCards; i++) {
                for(let j = 0; j < 2; j++) {
                    this.deck.push(`<div class="card back" value="${i}">${i}</div>`);
                }
            }
        }
        randomizeCards() {
            this.deck.sort( function (){
                return 0.5 - Math.random();
            });
        }
    }

    let memoryDeck = new CardDeck();
    memoryDeck.generateCards(16);
    memoryDeck.randomizeCards();
    fillGrid(memoryDeck.deck); 
});