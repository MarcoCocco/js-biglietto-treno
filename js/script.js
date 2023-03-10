/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).*/

/* 
1- Chiedere l'età del cliente e memorizzarla.
2- Chiedere il numero di KM da percorrere e memorizzarli.
3- Il prezzo è uguale al numero di KM percorsi per 0.21€.
   ?SE l'età è inferiore a 18 anni va applicato il 20% di sconto.
   :ALTRIMENTI SE l'età è superiore a 65 anni va applicato il 40% di sconto.
   :ALTRIMENTI il prezzo rimane uguale al numero di KM percorsi.
4- Il prezzo finale deve essere espresso con massimo due decimali.
*/

let clientAge = parseInt(prompt('Quanti anni hai?'));
let distance = parseInt(prompt('Quanti chilometri desideri percorrere?'));

let price = distance * 0.21;
let discountPrice20 = price - ((price * 20) / 100);
let discountPrice40 = price - ((price * 40) / 100);


if (clientAge < 18 ) {
    document.writeln(`Il costo del tuo biglietto è di ${discountPrice20.toFixed(2)}€`); 
} else if (clientAge > 65) {
    document.writeln(`Il costo del tuo biglietto è di ${discountPrice40.toFixed(2)}€`);
} else {
    document.writeln(`Il costo del tuo biglietto è di ${price.toFixed(2)}€`);
}




    
