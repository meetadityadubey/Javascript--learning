const userCount = 689 //js automatically takes this value as number
console.log(userCount)

const userCount1 = new Number(890) //print this in console tab to get methods

console.log(userCount1);

//to string. this method converts it to string

let user_Count = userCount1.toString()
console.log(user_Count)

console.log(typeof(user_Count));

console.log(user_Count.length)

// fix decimal places after

console.log(userCount1.toFixed(2))

//precision method

const number = 1534.58958
console.log(number.toPrecision(5));

//to improve readability or to add commas between digits of a number
// this method always returns a string
const anotherNumber = 100000000
console.log(anotherNumber.toLocaleString('en-IN'))


// ------------------------- Maths ----------------------------

console.log(Math)

//abs method returns the absolute or positive value of a numer
console.log(Math.abs(-4))

//round method
console.log(Math.round(7.9))

//ceil method is used to get the just greater value
console.log(Math.ceil(5.2))

//floor method is used to get just smaller value
console.log(Math.floor(4.7));

//min and max method 
console.log(Math.min(8,3,34,34,42,53))
console.log(Math.max(4,523,434,3254,3))

//ramdom. this always gives value between 0 and 1 including both
console.log(Math.random())

//to get a required valur we simply multiply by requited number
console.log((Math.random()*10) + 1)

console.log(Math.floor((Math.random()*10)) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min);

