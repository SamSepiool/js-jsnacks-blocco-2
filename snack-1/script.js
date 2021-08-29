
// FOR
// chiedere per 5 volte all’utente di inserire un numero.
var somma = 0;

for (var i = 0; i < 5; i++) {
    var nuovoNumero = parseInt( prompt('inserisci un numero') );
    // validation
    while( isNaN(nuovoNumero) ){
        nuovoNumero = parseInt( prompt('questo non sembra un numero, riprova') )
    }
    somma += nuovoNumero;
}
// l programma stampa la somma di tutti i numeri inseriti.
console.log(somma);
document.getElementById('result').innerHTML += somma;



// WHILE
// chiedere per 5 volte all’utente di inserire un numero.
var somma = 0;
var i = 0;

while ( i < 5) {
    var nuovoNumero = parseInt( prompt('inserisci un numero') );
    // validation
    while( isNaN(nuovoNumero) ){
    nuovoNumero = parseInt( prompt('questo non sembra un numero, riprova') )
    }

    somma += nuovoNumero;
    i++;
}
// l programma stampa la somma di tutti i numeri inseriti.
console.log(somma);
document.getElementById('result').innerHTML += somma;
