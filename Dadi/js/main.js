const userButton = document.getElementById("user-button");
const pcButton = document.getElementById("pc-button");

const userRandom = Math.floor(Math.random() * 10) + 1;
const pcRandom = Math.floor(Math.random() * 10) + 1;

if (isNaN(userButton) || isNaN(pcButton)) {
	alert("devi inserire un numero da 1-10");
} else {
	if (userButton > pcButton) {
		alert("hai vinto");
	} else if (userButton == pcButton) {
		alert("questo è un pareggio");
	} else {
		alert("ha vinto il pc");
	}
}
