let theDate = new Date() //another way to declare something
console.log(theDate.toString())
console.log(theDate.toDateString())
console.log(theDate.toLocaleDateString())
console.log(typeof theDate)

let myCustomDate = new Date(2024, 3, 8)//months start from 0 in JS
console.log(myCustomDate.toDateString());

//we can also give other number in myCustomDate
let myCustomDate1 = new Date(2024, 3, 8, 5, 3)
console.log(myCustomDate1.toLocaleString());
console.log(myCustomDate1.toLocaleDateString());
console.log(myCustomDate1.toISOString());
console.log(myCustomDate1.toJSON())

let myCustomDate2 = new Date("12-04-2024") //mm-dd=yyyy
console.log(myCustomDate2.toLocaleString());
console.log(myCustomDate2.getMonth());
