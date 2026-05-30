const accoundId = 144343 // ab isko change nhi kiya jaa sakta
let accoundEmail = "kanchan@gmail.com"
var accoundPassword = "12345"
accountCity = "Jaipur" // not a good practice
// accoundId = 2 // not allowed
console.log(accoundId)

accoundEmail = "k.k@gmai.com"
accoundPassword = "9876"
accountCity = "nagaur"
console.table([accoundEmail,accoundPassword,accountCity]);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

let account
console.log(account) // output -> undefined
 
