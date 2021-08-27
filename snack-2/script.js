// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo

var nuovoNumero = parseInt( prompt ('inserisci un numero') );

if ( nuovoNumero % 2 == 0) {
    console.log(nuovoNumero)
} else {
    nuovoNumero = nuovoNumero + 1;
    console.log(nuovoNumero);
}
