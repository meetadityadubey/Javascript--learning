//

function myFunction(){
    console.log("hello world")
}
myFunction()

function myAddFunction(x, y){
    console.log(x + y)
}

myAddFunction(6, 8) //it is not necessary that user will enter a num. it could be a string so it will not always print the required sum


function myAddFunction(x, y){
    console.log(x + y)
}

function myAddFunction(x, y){
    
    let result = x + y
    return result
    console.log(result) //this will never get excuted because after return the code breaks

}

const result = myAddFunction(8, 9)
console.log("result:", result) //here we get undefined because js is not returning the same result 

function isUserLoggedIn(username){
    return `${username} just logged in`
}

console.log(isUserLoggedIn("aditya"))

// if user does not define username


function isUserLoggedIn(username){
    if(username == undefined){
        console.log("Please enter your username")
        return
    }
    return `${username} just logged in`
}

isUserLoggedIn()
console.log(isUserLoggedIn())
console.log(isUserLoggedIn("dubey"))

// shopping cart

function getCartPrices(...prices){ //...rest operator returns array
    return prices
}

getCartPrices(222, 55, 66, 909)
console.log(getCartPrices(22, 55, 66))

let myobj1 = {
    user: "aditya",
    age: 18
}

function anyObj(){
    console.log(`${myobj1.user} just logged in and his age is ${myobj1.age}`) 

}

anyObj(myobj1)

//array

const newArray = [200, 400, 700]

function getIndexValue(anyArray){
    return anyArray[2]
}

console.log(getIndexValue(newArray))