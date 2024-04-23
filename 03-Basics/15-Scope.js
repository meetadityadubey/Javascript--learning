// why we should not use var
// because it changes both the global as well as inner scope

var c = 43

function tocheck(){
    c = 45
    return c
}
 
console.log(tocheck())
console.log(c)

//in both the above cases we get result as 45 but it should not happen as it might break the code if another variable of same name is defined outside the scope of the function

function one(){
    let username = "aditya"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    console.log(website) //think if this will give error

    two()
}

one()

//if else case

if (true) {
    const username = "aditya"
    if (username === "aditya") {
        const surname = " dubey"
        console.log(username + surname)
    }

    console.log(surname) //think if this will giver error
}

console.log(username) //think if this will give error

// hoisting basic

function sum(num){
    return num + 1
}
sum(8) //we can also call this function before defining

const newFunction = function sum(num){ //the newFunction act as a function and hence will accept value
    return num + 1 
}

newFunction(9)

//ReferenceError: Cannot access 'newFunction' before initialization