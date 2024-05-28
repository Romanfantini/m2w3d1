/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/



function crazySum(n1, n2) {
  let sommaNumeri = n1 + n2;
  if (n1 !== n2) {
    return sommaNumeri;
  } else {
    return sommaNumeri * 3;
  }
}

console.log(crazySum(2, 2));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/



function boundary(number1) {
  if (number1 === 400 || (number1 >= 20 && number1 <= 100)) {
    return true;
  } else {
    return false;
  }
}

console.log(boundary(110));
/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/


function reverseString(stringa) {
  return stringa.split("").reverse().join("");
}

console.log(reverseString("Epicode"));
/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst(string) {
  let parole = string.split(" ");
  for (i = 0; i < parole.length; i++) {
    parole[i] =
      parole[i].charAt(0).toUpperCase() + parole[i].slice(1).toLowerCase();
  }
  return parole.join(" ");
}

console.log(upperFirst("Ciao mamma"));
/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(n) {
    let array= [];
    for (i=0; i<n; i++){
        array.push(Math.floor(Math.random()*11));   //genera un numero random
    }
    return array;
}

console.log(giveMeRandom(5));
//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
function area(L1 , L2) {
      return L1 * L2;
}

console.log(area(2 , 2))
/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff(num) {
    let differenza= Math.abs(num - 19);
    if (differenza>19) {
       return (differenza*3);
    } else {
        return differenza;
    } 
}
console.log(crazyDiff(5))
/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify(strinCodify) {
    if (strinCodify.startsWith('code')) {
        return strinCodify;
    } else {
        return 'code' + strinCodify;
    }
}

console.log(codify('magnia'))
/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/
function check3and7(n) {
    if((n>=0) && (n % 3 === 0 || n % 7 === 0) &&( Number.isInteger(n))) {
        return true;
    } else {
        return false;
    }
}
console.log(check3and7(21))
/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/
function cutString (stringa){
    return stringa.slice(1, -1)
}
console.log(cutString('Roman'));