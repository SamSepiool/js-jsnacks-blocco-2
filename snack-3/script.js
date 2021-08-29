// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

var nomi = ['luca', 'mario', 'paolo'];
var cognomi = ['draghi', 'rossi', 'verdi']
var whiteList = [];

for ( var i = 0; i < 3; i++)  {
    whiteList.push(nomi[Math.floor(Math.random() * nomi.length )] + " " + cognomi[Math.floor(Math.random() * cognomi.length)]);
    
} 

console.log(whiteList); 