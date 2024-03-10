const accountId=12345
let accountEmail="dhanush@gmail.com"
var accountPassword="12345"
accountCity = "Tumakuru"
let accountState // dataType will be undefined

//accountId=1274646 // not allowed to change const
console.log(accountId)

accountEmail="dhanushsanand@gmail.com"
console.log(accountEmail)

accountPassword="11111"
accountCity="Bengaluru"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
