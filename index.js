
// for dice No 1 
var randomNumber1 = Math.floor(Math.random()*6)+ 1;

var randomDiceImage = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelector("img.img1");

image1.setAttribute("src",randomDiceImage);

// for dice 2
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelector("img.img2");

image2.setAttribute("src",randomDiceImage2);

// results of the match 
if(randomNumber1 > randomNumber2){
    var winner1 = document.querySelector("h1");
    winner1.innerHTML="💋 Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    var winner2 = document.querySelector("h1");
    winner2.innerHTML = "Player 2 Wins!💋";

}
else if (randomNumber1 === randomNumber2){
    var draw = document.querySelector("h1");
    draw.innerHTML = "Draw!"

}
