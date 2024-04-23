const myGames = ["Call of Duty", "Modern Combat", "Clash of Clans"]
const myApps = ["Discord", "Twitter", "GitHub"]

myGames.push(myApps)

console.log(myGames);

//javascript treats every element as a single one so the array is also treated as a single element and hence get embedded in the first array

//indexing

console.log(myGames[3]) //we get output as an array(myApps)
//if we want to access a specific element then we also have to specify index of index

console.log(myGames[3][1]);

//concat returns a new array

const newArr = myGames.concat(myApps)
console.log(newArr);

//spread 

const allArr = [...myGames, ...myApps]
console.log(allArr)

// flat()
const newArray = [1, 3, 4, [4, 5, 2], 4, 5, [2, 3, [9, 6, 0]]]
const realArray = newArray.flat(Infinity)
console.log(realArray)

console.log(Array.isArray("aditya"))
console.log(Array.from("Aditya")) //converts into array

let score1 = 500
let score2 = 200
let score3 = 900
console.log(Array.of(score1, score2, score3));