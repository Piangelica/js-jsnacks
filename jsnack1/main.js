// Dichiaro l'array e gli assegno degli elementi:
// let mail =[matteo@gmail.com; fabio@gmail.com; pietro@gmail.com; anna@gmail.com]
// function name(params) 
// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore
let primoNumero = prompt("Inserisci il primo numero:");
let secondoNumero = prompt("Inserisci il secondo numero:");

if(primoNumero>secondoNumero){
    alert("il primo numero è maggiore del secondo");
} else if(secondoNumero>primoNumero){
    alert("il secondo numero è maggiore del primo");   
}else{
alert("i due numeri sono uguali")
}