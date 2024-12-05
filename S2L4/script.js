/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
area = (l1, l2) => {
    return l1 * l2
}
const resultarea = area(10, 5)
console.log("L'area del rettangolo è:" + resultarea)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
crazySum = (num1, num2) => {
    if (num1 === num2) {
        return (num1 + num2) * 3;
    }
    return num1 + num2;
}
const resultCrazySum = crazySum(10, 10)
console.log("La somma della funzione è:" + resultCrazySum)

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
crazyDiff = (n) => {
    const diff = Math.abs(n - 19);
    if (n > 19) {
        return diff * 3;
    }
    return diff;
}
const resultCrazyDiff = crazyDiff(10)
console.log("La somma della differenza è:" + resultCrazyDiff)

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
boundary = (n) => {
    return (20 >= n <= 100) || n === 400;
}
let n = 15
console.log("Il risultato della funzione è: " + boundary(n))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
epify = (str) => {
    if (str.startswith("EPICODE")) {
        return str
    }
    return "EPICODE" + str;
}
const resultEpify = epify("EPICODE")
console.log("Il risultato della funzione è: " + resultEpify)

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
check3and7 = (n) => {
    return n % 3 === 0 || n % 2 === 0;
}
const resultCheck = check3and7(5)
console.log("Il risultato della funzione è: " + resultCheck)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
reverseString = (str) => {
    return str.split("").reverse().join("");
}

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
upperFirst = (strstr) => {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
cutString = (str) => {
    return str.slice(1, -1);
}

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
giveMeRandom = (n) => {
    const randomN = [];
    for (let i = 0; i < n; i++) {
        randomN.push(Math.floor(Math.random() * 11));
    }
    return randomN;
}