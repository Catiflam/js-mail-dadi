const userButton = document.getElementById("user-button");
const pcButton = document.getElementById("pc-button");

const userRandom = Math.floor(Math.random() * 10) + 1;
const pcRandom = Math.floor(Math.random() * 10) + 1;

if (isNaN(userButton) || isNaN(pcButton)) {
	alert("devi inserire un numero da 1-10");
}
