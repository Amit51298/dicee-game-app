var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;

var randomDiceImage1 = "dice"+randomNumber1+".png";
var randomImageSource1 = "./images/"+randomDiceImage1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);

var randomNumber2=Math.random()*6;
randomNumber2=Math.floor(randomNumber2)+1;

var randomDiceImage2 = "dice"+randomNumber2+".png";
var randomImageSource2 = "./images/"+randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelectorAll("h1")[0].innerHTML = "🚩 Player 1 wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelectorAll("h1")[0].innerHTML = "Player 2 wins! 🚩";
}
else{
    document.querySelectorAll("h1")[0].innerHTML = "Draw!";
}
