// // chiedere per 5 volte all’utente di inserire un numero.
var somma = 0;
for (var i = 0; i < 5; i++) {
    var nuovoNumero = parseInt( prompt('inserisci un numero') );

    while( isNaN(nuovoNumero) ){
        nuovoNumero = parseInt( prompt('questo non sembra un numero, riprova') )
    }
    somma += nuovoNumero;
}
// l programma stampa la somma di tutti i numeri inseriti.
console.log(somma);
document.getElementById('result').innerHTML += somma;



// WHILE
// var listaNumeri = [];
// var nuovoNumero = 0;
// i = 0;
// while ( i < 5) {
//     var nuovoNumero = prompt('inserisci un numero');
//     listaNumeri.push(nuovoNumero);
//     i++;
// }

// while ( i < 5) {
//     var li = document.createElement('li');
//     li.textContent = listaNumeri[i];
//     document.getElementById('numbers').appendChild(li);
//     i++;
// }