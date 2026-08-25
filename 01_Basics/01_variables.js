const accountId = 1234
let accountEmail = "tusharsehrawat015@gmail.com"
var accountPassword = "981394"
accountCity = "Pune"
let accountState;

// accountId = 2 // not allowed

accountEmail = "tushar@gmail.com"
accountPassword = " 893084 "
accountCity = "Jaipur"

console.log(accountId);

/* 
prefer not to use var
bcz of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])