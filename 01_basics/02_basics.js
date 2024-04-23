const accountId = 121212 //const is used to specify a particular value to a variable. this is not supposed to change

let accountEmail = "meetadityadubey@google.com" //let is used to declare a variable and this can be changed when required.

var accountPassword = "619" //var is not used nowadays because of issue in block scope and functional scope. the use to this is prohibited.

//sometimes we have to declare a variable whose value can change and whose initial value cannot be defined. if we try to print this we get value called "undefined"
let accountState;

console.log(accountId);

// if we have to print many variables at once we use
console.table([accountEmail, accountId, accountPassword, accountState])
