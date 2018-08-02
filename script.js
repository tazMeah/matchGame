"use strict";


$(document).ready(() => {

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
            for (let i = 1; i <= numOfCards; i++) {
                for (let j = 0; j < 2; j++) {
                    this.deck.push(`<div class="card is_flipped" value="${i}"><div class="card_face card_face_front" value="${i}"></div><div class="card_face card_face_back" value="${i}"></div></div>`);
                }
            }
        }
        randomizeCards() {
            this.deck.sort(function() {
                return 0.5 - Math.random();
            });
        }
    }

    let memoryDeck = new CardDeck();
    memoryDeck.generateCards(16);
    memoryDeck.randomizeCards();



    $("#reset").click(function() {
        location.reload(5000);
        memoryDeck.randomizeCards(16);
        fillGrid(memoryDeck.deck);
    })



    //when you click a card
    $(document).on("click", ".card", function(e) {

        //add a class to it
        $(this).toggleClass("is_flipped");
        console.log($(this).attr("value"));
        // add background
        //$(e.target).css("background", `url("/img/${$(e.target).attr('value')}.jpg")`);

        //isMatch(e.target);

    });

    // if 2 cards have been flipped, i.e. 2 cards have class of "front"
    // function isMatch(card) {
    //     if ($(card).attr("value") === )
    // }


    $("#start").click(function() {
        let counter = 20;
        fillGrid(memoryDeck.deck);
        $(".card_face_back").each(function() {
            $(this).css("background-image", `url("img/${$(this).attr("value")}.jpg")`);
        });
        let counter = 8;
        setInterval(function() {
            counter--;
            if (counter >= 0) {
                $("#count").text(counter);
            }
            if (counter === 0) {
                clearInterval(counter);
            }
        }, 1000);
    });

    $(".card_face_back").each(function() {
        $(this).css("background-image", `url("img/${$(this).attr("value")}.jpg")`);
    })


});