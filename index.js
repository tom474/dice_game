// First dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var image1 = "./images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", image1);

// Second dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var image2 = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", image2);

// Display the winner
if (randomNumber1 > randomNumber2) {
	document.querySelector("h1").textContent = "🚩Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
	document.querySelector("h1").textContent = "Player 2 Wins!🚩";
} else {
	document.querySelector("h1").textContent = "Draw!";
}
