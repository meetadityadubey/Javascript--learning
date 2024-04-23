const userEmail = "aditya@gmail.com"

const userEmail1 = []

// if (userEmail) {
//     console.log("you can login")
// } else {
//     console.log("you cannot login")
// }


// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if (userEmail1.length === 0) {
    console.log("Array is empty")
}

const myObj = {}

if (Object.keys(myObj).length === 0) {
    console.log("Object is empty")
}

//nullish Coalescing Operator (??): null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")