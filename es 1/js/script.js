// Palidroma Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let yourWord = prompt("Inserisci parola");

function check(word) {
    let temp = word.split("").reverse().toString().replace(/,/g, "");
    word = word.split("").toString().replace(/,/g, "");
    if (temp == word){
        return true;
    } else {
        return false;
    }
}

if (check(yourWord)){
    console.log(yourWord + " è palindromo");
} else {
    console.log(yourWord + " non è palindromo");
}

