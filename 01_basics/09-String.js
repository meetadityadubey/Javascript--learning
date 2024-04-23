// outdated way of concatination of strings. not recommended
let firstName = "aditya"
let lastName = "dubey"

console.log(firstName + lastName);

// modern way
console.log(`Hello my name is ${firstName} ${lastName}`);

// new way to define string
const userId = new String("adityadubey1 killer dubey")

//.length .touppercase etc are called methods

console.log(userId[0]) //key value pair.

console.log(userId.length) //know the length

console.log(userId.toUpperCase());

console.log(userId.charAt(5)) //get what character at which index. starts from 0

console.log(userId.indexOf("a"))

// slice
const newString = userId.substring(0, 9) //last value excluded
console.log(newString);

const anotherString = userId.slice(-9, 9) //it can also take -ve value
console.log(anotherString);

//trim

const keyString = "  aditya  "
console.log(keyString.trim()) //trim is used to remove empty spaces. useful when we want to store email and don't want extra spaces

// replace

const url = "https://www.dubeyaditya/dubeyaditya%20.com"
const url1 = url.replace('%', '-')
console.log(url1);

console.log(url.includes('aditya')) //search if it exits or not

//split. we get array as a result

console.log(userId.split(' '))