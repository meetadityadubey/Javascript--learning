// const twitterUser = new Object() //singleton object

const twitterUser = {}

twitterUser.id = "samy123"
twitterUser.name = "Sammy"
twitterUser.isLoggedIn = false

// console.log(twitterUser);

//nesting in objects

// const newUser = {
//     email: "someone@google.com",
//     fullName: {
//         firstName: "someone",
//         lastName:"anything"
//     }
// }

// console.log(newUser);
// console.log(newUser.fullName.firstName)

//combining in object

let obj1 = {
    1: "a",
    2: "d"
}


let obj2 = {
    3: "i",
    4: "t"
}

// let obj3 = {obj1, obj2} //not the required approach

// let obj3 = Object.assign({}, obj1, obj2) 

// let obj3 = {...obj1, ...obj2} 
// console.log(obj3)

const hello = [
    {
        fullname: "aditya"
    }
]

// console.log(hello[0]);

// console.log(Object.keys(twitterUser)) //gives array
// console.log(Object.values(twitterUser))

//*************************** ***/

const course = {
    coursename: "js in hindi",
    price: "999",
    courserInstructor: "hitesh"
}


//new way of extracting value

const {courserInstructor} = course //or
const {courserInstructor: instructor} = course

console.log(courserInstructor)