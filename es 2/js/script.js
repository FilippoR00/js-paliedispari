// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione) Dichiariamo chi ha vinto.

let number = parseInt(prompt("Inserisci un numero da 1 a 5"));

while(number > 5 || number < 1){
    alert("errore");
    number = prompt("Inserisci un numero da 1 a 5");
}

function random(max, min) {
    let randNum = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(randNum);
    return randNum;
}

function checkWin(userNum) {
    let temp = random(5, 1) + userNum;
    console.log(temp);
    if(temp%2 == 0){
        console.log("Hai vinto");
    } else {
        console.log("Hai perso");
    }
}

checkWin(number);


