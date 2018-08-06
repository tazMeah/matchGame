"use strict";


$(document).ready(() => {

    let score = 0;

    //populate sceen with cards
    function fillGrid(arr) {
        for (let i = 0; i < arr.length; i++) {
            $(".card_deck").append(arr[i]);
        }
    }
    //class to create cards and randomize their order
    class CardDeck {
        constructor(numOfCards) {
            this.deck = [];
            this.numOfCards = numOfCards;
        }
        generateCards(numOfCards) {
            numOfCards = numOfCards / 2;
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
                    .animate({ opacity: 0,
                     }, 1000);
                score++;
                $("#score").text(`SCORE: ${score}`);
            } else {
                console.log("no match");
                //if no match wait 1.1s then flip
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
        //set up the cards
        memoryDeck.randomizeCards();
        fillGrid(memoryDeck.deck);
        //attach images to cards
        $(".card_face_back").each(function() {
            $(this).css("background-image", `url("img/${$(this).attr("value")}.jpg")`);
        });

        //start button
        if($(this).attr("class") === "start") {
            let counter = 45;
            const alertAudio = new Audio("red_alert.wav");
            const explosionAudio = new Audio("explosion.wav");

            setInterval(function() {
                counter--;
            // you win, stop timer
            if (score == 8) {
                clearInterval(counter);
                return ;
            }
            //set counter text
            if (counter > 15) {
                $("#count").text(counter);
            //change text to red at 15s
            } else if (counter < 16 && counter > 5) {
                $("#count")
                .text(counter)
                .css("color", "red")
                .css("font-size", "150%");
            //change text to blinking at 5s
            } else if (counter < 6 && counter >= 0) {
                alertAudio.play();
                $("#count")
                .text(counter)
                .fadeOut(100);
                $("#count")
                .text(counter)
                .fadeIn(100);
            }
            //stop timer at 0
            if (counter === 0) {
                explosionAudio.play();
                clearInterval(counter);
                
            //game over
            $(".card_deck").toggle();
            $("#gameOver div").toggle();
            }
            }, 1000);
            //switch to reset button
            $(this).
            toggleClass("start reset")
            .text("RESET");
            //reset button
            } else if ($(this).attr("class") === "reset") {
                location.reload();
                //switch to start button
                $(this)
                .toggleClass("reset start")
                .text("START");
            }
    });
});