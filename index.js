let firstCard = 10
let secondCard= 11
let sum =firstCard + secondCard

if(sum <21) {
    console.log("Do you want to draw a new card?")
}else if (sum===21){
    console.log("wohoo! you've got Blackjack!")
}else if (sum > 21){
    console.log("you're out of the game!")
}