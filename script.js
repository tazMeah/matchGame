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
                    this.deck.push(`<div class="card back" value="${i}">${i}</div>`);
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
    fillGrid(memoryDeck.deck);


    $("#reset").click(function() {
        location.reload(5000);
        memoryDeck.randomizeCards()
    })



    //when you click a card
    $(document).on("click", ".back", function() {

        //add a class to it
        $(this).toggleClass("back front");
        console.log($(this).attr("value"));
        // add background

        $(this).css("background", `url("/img/${$(this).attr('value')}.jpg")`);

        // if 2 cards have been flipped, i.e. 2 cards have class of "front"
        if (document.querySelectorAll(".front").length == 2) {
            // check if the first one's value is equal to the second one's value
            if ($(".front").eq(0).attr("value") == $(".front").eq(1).attr("value")) {
                // if a match
                console.log("they match");
                // add class "match" to them and remove class "front"
                $(".front").toggleClass("front match");

                // add the score by counting the number of class "match". Put it in the score span
                //$("span").text($(".match").length);




            } else {
                // if no match
                console.log("they don't match");
                // remove class front from all
                $(".front").removeClass("front")

            }
        }
    })


    $("#start").click(function() {
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


});

//$(".back").css("background-image", `url("${$('.card').attr('value').jpg}")`);

//});