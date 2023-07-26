const firstNumber = parseInt(prompt("inserisci un numero"));
const secondNumber = parseInt(prompt("inserisci un numero"));

const winnerText = document.getElementById("winner");
const userPlayer = document.getElementById("user-roll");
const pcPlayer = document.getElementById("pc-roll");

const userRandom = Math.floor(Math.random() * 6) + 1;
const pcRandom = Math.floor(Math.random() * 6) + 1;

let winnerEl;

if (isNaN(pcRandom) || isNaN(userRandom)) {
	alert("devi inserire un numero da 1-6");
} else {
	if (userRandom > pcRandom) {
		winnerEl = "hai vinto";
		// alert("hai vinto");
	} else if (pcRandom > userRandom) {
		winnerEl = "ha vinto il pc";
		// alert("ha vinto il pc");
	} else {
		winnerEl = "pareggio";
		// alert("pareggio");
	}
}

userPlayer.innerText = userRandom;
pcPlayer.innerText = pcRandom;
winnerText.innerText = winnerEl;
