// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

var nomi = ['luca', 'mario', 'paolo'];
var cognomi = ['draghi', 'rossi', 'verdi']
var whiteList = [];

for ( var i = 0; i < 3; i++)  {
    var invitatoFake = nomi[Math.floor(Math.random() * 3)] + " " + cognomi[Math.floor(Math.random() * 3)];
    whiteList.push(invitatoFake);
} 

console.log(whiteList);