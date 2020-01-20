var p1 = Math.floor(Math.random()*6) + 1;
var p2 = Math.floor(Math.random()*6) + 1;


var image1 = "images/dice" + p1 + ".png";
var image2 = "images/dice" + p2 + ".png";


document.querySelector(".img1").setAttribute("src", image1);
document.querySelector(".img2").setAttribute("src", image2);

if(p2>p1)
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
else if (p1>p2)
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
else
    document.querySelector("h1").innerHTML = "Draw!";
