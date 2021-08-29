// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione (indice dell'array) dispari

var numeri= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var c = numeri.length;


var sommaDispari = 0;
for ( i = 0; i < c; i++) {

    if( i % 2 > 0){
        sommaDispari += numeri[i];
    }
}

console.log('SOMMA DISPARI' + ' ' + sommaDispari);








