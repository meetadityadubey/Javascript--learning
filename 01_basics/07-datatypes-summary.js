// some more datatypes:
// Symbol, BigInt, String, Booleans, Numbers

const userId = Symbol("1245")
const userId2 = Symbol("1245")
// the above two are different because Symbol assign different symbol. confirmation:
console.log(userId === userId2);

const bigNumber = 1435835837842374238748734n
console.log(typeof bigNumber)

// non primitive datatypes
// Array, Objects, Functions

const friends = ['aditya', 'dubey', 'hello'] // Array

let myObjects = {
    name: "aditya",
    age: 17,
}

const myFunction1 = function(){
    console.log("hello world")
}

