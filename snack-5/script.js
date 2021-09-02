// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

var ranIndex = Math.floor(Math.random() * 30);
var arr1 = []
var arr2 = []

// creo primo array random
for(var i = 0; i<ranIndex; i++){
    var num =  Math.floor(Math.random() * 30);
    arr1.push(num);
}

console.log('array1: ' + arr1)
console.log('numero elementi: ' + arr1.length)

// secondo array random
for(var i = 30; i>ranIndex; i--){
    num =  Math.floor(Math.random() * 30);
    arr2.push(num);
}

console.log('array2: ' + arr2)
console.log('numero elementi: ' + arr2.length)



// se primo array ha meno elementi
if (arr1.length < arr2.length){
    console.log('array1 è piu corto')
    // aggiungo tanti elementi finchè la condizione è vera
    do{
        num =  Math.floor(Math.random() * 30);
        arr1.push(num)
    } while( arr1.length<arr2.length )

    // se secondo array ha meno elementi
} else if (arr2.length < arr1.length){
    console.log('array2 è piu corto')
     // aggiungo tanti elementi finchè la condizione è vera
    do{
        num =  Math.floor(Math.random() * 30);
        arr2.push(num)
    }while( arr2.length<arr1.length )

} else {
    console.log('gli array hanno la stessa lunghezza')
}


console.log('array1: ' + arr1)
console.log('numero elementi: ' + arr1.length)
console.log('array2: ' + arr2)
console.log('numero elementi: ' + arr2.length)





