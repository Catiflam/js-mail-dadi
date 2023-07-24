const mails = ["user@gmail.com", "user@libero.it", "user@hotmail.com", "user@yahoo.com"];

const userMail = prompt("inserisci la tua mail");

// if (userMail < mails.length && !isNaN(userMail)) {
// 	console.log(mails[userMail]);
// }
let found = false;
for (let i = 0; i < mails.length; i++) {
	if (userMail == mails[i]) {
		found = true;
	}
}

if (found) {
	console.log("ti ho trovato");
} else {
	console.log("non ti ho trovato");
}
