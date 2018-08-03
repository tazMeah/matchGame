"use strict";


$(document).ready(() => {

    let score = 0;

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
                    this.deck.push(`<div class="card is_not_flipped" value="${i}"><div class="card_face card_face_front" value="${i}"></div><div class="card_face card_face_back" value="${i}"></div></div>`);
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

    //when you click a card
    $(document).on("click", ".card", function() {

        //add a class to the card
        $(this).toggleClass("is_not_flipped is_flipped");

        //if 2 cards are flipped
        if ($(".is_flipped").length === 2) {
            //check if is a match
            if ($(".is_flipped").eq(0).attr("value") === $(".is_flipped").eq(1).attr("value")) {
                console.log("match found");
                //if matched increment score and hide cards
                $(".is_flipped").toggleClass("is_flipped")
                    .animate({ opacity: 0, }, 1000);
                score++;
            } else {
                console.log("no match");
                //if no match wait 3sec then flip
                $(".is_flipped")
                    .delay(1100)
                    .queue(function(next) {
                        $(".is_flipped")
                            .toggleClass("is_flipped is_not_flipped");
                        next();
                    });
            }
        }
    });


    //alternating Start/Reset button
    $("button").click(function () {
        memoryDeck.randomizeCards(16);
        fillGrid(memoryDeck.deck);
        $(".card_face_back").each(function() {
            $(this).css("background-image", `url("img/${$(this).attr("value")}.jpg")`);
        });

        //start button
        if($(this).attr("class") === "start") {
            let counter = 45;
        
            setInterval(function() {
                counter--;
              // you win, stop timer
            if (score == 8) {
                clearInterval(counter);
                return ;
            }
                if (counter >= 0) {
                    $("#count").text(counter);
                }
                if (counter === 0) {
                    clearInterval(counter);
                  
                   //game over
                $(".card_deck").toggle();
                $("#gameOver div").toggle();
                }
            }, 1000);
            $(this).
            toggleClass("start reset")
            .text("RESET");
        //reset button
        } else if ($(this).attr("class") === "reset") {
            location.reload();
            $(this)
            .toggleClass("reset start")
            .text("START");
        }
    });
    
});