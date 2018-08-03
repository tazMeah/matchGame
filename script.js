// "use strict";


// $(document).ready(() => {

//     let score = 0;

//     function fillGrid(arr) {
//         for (let i = 0; i < arr.length; i++) {
//             $(".card_deck").append(arr[i]);
//         }
//     }

//     class CardDeck {
//         constructor(numOfCards) {
//             this.deck = [];
//             this.numOfCards = numOfCards;
//         }
//         generateCards(numOfCards) {
//             numOfCards = numOfCards / 2;
//             const deck = [];
//             for (let i = 1; i <= numOfCards; i++) {
//                 for (let j = 0; j < 2; j++) {
//                     this.deck.push(`<div class="card is_not_flipped" value="${i}"><div class="card_face card_face_front" value="${i}"></div><div class="card_face card_face_back" value="${i}"></div></div>`);
//                 }
//             }
//         }
//         randomizeCards() {
//             this.deck.sort(function() {
//                 return 0.5 - Math.random();
//             });
//         }
//     }

//     let memoryDeck = new CardDeck();
//     memoryDeck.generateCards(16);
//     memoryDeck.randomizeCards();



//     $("#reset").click(function() {
//         location.reload(5000);
//         memoryDeck.randomizeCards(16);
//         fillGrid(memoryDeck.deck);
//     });



//     //when you click a card
//     $(document).on("click", ".card", function() {

//         //add a class to the card
//         $(this).toggleClass("is_not_flipped is_flipped");

//         //if 2 cards are flipped
//         if($(".is_flipped").length === 2) {
//             //check if is a match
//             if($(".is_flipped").eq(0).attr("value") === $(".is_flipped").eq(1).attr("value")) {
//                 console.log("match found");
//                 //if matched increment score and hide cards
//                 $(".is_flipped").toggleClass("is_flipped")
//                 .animate({opacity: 0,}, 2000);
//                 score++;
//             } else {
//                 console.log("no match");
//                 //if no match wait 3sec then flip
//                 $(".is_flipped")
//                 .delay(3000)
//                 .queue(function(next) {
//                     $(".is_flipped")
//                     .toggleClass("is_flipped is_not_flipped");
//                     next();
//                 });
//             }
//         }
//     });
//     //start button operations
//     $("#start").click(function() {
//         let counter = 20;
//         fillGrid(memoryDeck.deck);
//         $(".card_face_back").each(function() {
//             $(this).css("background-image", `url("img/${$(this).attr("value")}.jpg")`);
//         });
//         let counter = 8;
//         setInterval(function() {
//             counter--;
//             if (counter >= 0) {
//                 $("#count").text(counter);
//             }
//             if (counter === 0) {
//                 clearInterval(counter);
//             }
//         }, 1000);
//     });
// });



 
$(document).ready(function(){

    // create a grid of 16 cards and add them to
    // section.card_deck
    for (let i = 1; i < 17; i++) {
        $("section.card_deck").append("<div>");
    }
    
})