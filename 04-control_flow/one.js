// if

if(2 != 3){
    console.log("hello world")
}

let temperature = -49.5

if (temperature < 50) {
    console.log("temperature is less than 50")      
} else {
    console.log("temperature is greater than 50")
}

let score = 100

if (score == 100) {
    let power = "invisible"
    console.log(`User Power: ${power}`)
}

// implicit scope

let balance = 100000

if (balance > 500) console.log("hello world"); //the scope ends here

if (balance < 500) {
    console.log("balance is less")
} else if (balance < 1000) {
    console.log("balance is less than 1000")
} else {
    console.log("balance is less than 1000000")
}


//multiple conditions (&& operator)

const whatToPurchase = true
const accessories = true
const isLoggedInWithGoogle = false
const isLoggedInWithEmail = true

if (whatToPurchase && accessories) {
    console.log("you can")   
}

//multiple conditions (|| or operator)

if (isLoggedInWithEmail || isLoggedInWithGoogle) {
    console.log("User loggedin")
}