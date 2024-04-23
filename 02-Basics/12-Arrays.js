const myArray = [1, 3, 9, 4, 7]
const myArray2 = new Array(2, 3, 5, 8)


console.log(myArray[0]); //indexing starts with 0 and not 1
console.log(myArray2.length);

// array methods

myArray.push(78) //adds new entry
console.log(myArray);

myArray.pop() //removes the last value
console.log(myArray);

myArray.unshift(90) //adds new entry at the beginning 
console.log(myArray);

myArray.shift() //removes the first entry
console.log(myArray);

console.log(myArray.includes(9)); //gives answer whether an element is present in the array or not

console.log(myArray.indexOf(9)); //gives the index of the element. if an element is not present in the array it will always print -1

const newArray = myArray.join() //adds all the element in the array as string separated by commas. it's type is string
console.log(newArray);

// slice and splice

console.log("a ", myArray)

const myNewArray = myArray.slice(1, 3)
console.log(myNewArray)

console.log("b ", myArray)

const myNewArray1 = myArray.splice(1, 3)
console.log("c ", myArray)
console.log(myNewArray1)

// difference b/w slice and splice is that slice does not change the original array while splice omitts the value specified in the form of index and gives us a new array without those values