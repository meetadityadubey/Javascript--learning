const user = {
    username: "aditya",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to our website`) //this is used to access in currnt context
        console.log(this) //thsi gives the current context means the object in this case
    }
}

user.welcomeMessage()
user.username = "hitesh" //now the value got changed and hence hitesh will be stored as new usermane
user.welcomeMessage()

console.log(this) //this 

function killer(){
    let username = "aditya"
    console.log(this.username)
}

killer()

const hello = function killer(){
    let username = "aditya"
    console.log(this.username)
}

killer()


//in above functions "this" does not work and gives value undefined even if we wrap into a variable

// arrow functions

const helloWorld = () => {
    let Username = "aditya"
    console.log(this.Username)
}

helloWorld()

const addnum = (num8, num9) => { //with values this time
    return num8 + num9
}

console.log(addnum(9, 8))

// another way

const maths = (num0, num6) => num0 + num6

const mAths = (num0, num6) => (num0 + num6) //used in react and does not require return explicitily

const maThs = (num0, num6) => ({name: "aditya"}) //to use object we must wrap it in parenthesis 

console.log(maths(9, 7))
