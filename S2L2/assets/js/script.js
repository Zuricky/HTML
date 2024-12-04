/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/*
let num1 = 5
let num2 = 10
if (num1 > num2) {
  console.log("Il numero maggiore è :", num1);
}
else if (num1 < num2) {
  console.log("Il numero maggione è:", num2);
}
else {
  console.log("I numeri sono uguali:");
}
*/

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/*
let number = 7
if (number !== 5) {
  console.log("not equal");
}
*/

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
let number = 10
if (number % 5 === 0) {
  console.log("divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let a = 8;
let b = 0;
if (a === 8 || b === 8 || a + b === 8 || a - b === 8) {
  console.log("Condizione soddisfatta.");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/*
let totalShoppingCart = 60;
let shippingCost = totalShoppingCart > 50 ? 0 : 10;
let totalCost = totalShoppingCart + shippingCost;
console.log("Totale da pagare:", totalCost);
*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let totalShoppingCart = 60;
let discountedTotal = totalShoppingCart * 0.8;
let shippingCost = totalShoppingCart > 50 ? 0 : 10;
let totalCost = discountedTotal + shippingCost;
console.log("Totale da pagare con lo sconto:", totalCost);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let x = 15, y = 10, z = 20;
let sorted = [x, y, z].sort((a, b) => b - a);
console.log("Numeri ordinati:", sorted);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let value = "test";
if (typeof value === "number") {
  console.log("È un numero.");
} else {
  console.log("Non è un numero.");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let numero = 7;
if (numero % 2 === 0) {
  console.log("Pari");
} else {
  console.log("Dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
/*
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = "Toronto";
console.log(me);
*/

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
/*
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
delete me.lastName;
console.log(me);
*/

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
let numbers = [];
numbers.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(numbers);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
numbers[numbers.length - 1] = 100;
console.log(numbers);