//for dice 1
var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage1);

//for dice 2
var randomNumber2 = Math.floor((Math.random()*6)+1);
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2); 

//change html content of h1 based on randomNumber values

if (randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="DRAW!";
}
else if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 wins!";
}