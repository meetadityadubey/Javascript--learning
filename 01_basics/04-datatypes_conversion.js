let score = 33

console.log(typeof(score)); //this is also a method to print

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

//if we try to convert a number into string it will print it as 33 or 23 and not "33". to check if it is string we need to use typeof syntax

let stringNumber = 33
let isstringNumber = String(stringNumber);
console.log(isstringNumber);
console.log(typeof(isstringNumber));