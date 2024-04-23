// Stack is used by primitive datatypes while Heap is used by non-primintive datatypes. Stack memory makes a copy while Heap memory gives reference

//Stack memory example:-

let userName = "Aditya Dubey"
let userName1 = userName
userName1 = "Killer Dubey"
console.log(userName1);
console.log(userName);

//Heap memory example:-

let myFunction = {
    userID : "aditya@gmail.com",
    passwd : 12345
}

let myFunction1 = myFunction;

myFunction1.userID = "dubey@gmail.com"

console.log(myFunction.userID);
console.log(myFunction1.userID);