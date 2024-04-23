// object literals

// Object.create() constructor method .. gives singleton

const mySymbol = Symbol('key1')

const newUser = {
    name: "Aditya", //the system treats name,email etc as string
    "full Name": "Aditya Dubey",
    [mySymbol]: "key2",
    email: "meetaditya@google.com",
    password: 12345,
    lastLoggedIn: "Monday",
    previousSessions: ["Monday", "Sunday", "Tuesday"]
}

//way of accessing values in object

// console.log(newUser.email) //this is not considered a good way. console log "full Name" but it is used a lot
// console.log(newUser["email"])
// console.log(newUser[mySymbol])

// newUser.email = "dubeyaditya@google.com"
// console.log(newUser)
// Object.freeze(newUser)
// newUser.email = "aditya@microsoft.com"
// console.log(newUser)


// Functions
newUser.greeting = function () {
    console.log("hello newUser")
}

newUser.greeting2 = function () {
    console.log(`hello newuser, ${this.name}`)
}

console.log(newUser.greeting())
console.log(newUser.greeting2())