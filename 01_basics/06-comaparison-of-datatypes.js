console.log("2" > 1);
console.log("02" > 1);
// if we try to print these into terminal we get result as true because javascript converts string to number if possible

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
//in above two cases null contains so expected results come but in case three we don't get the expected result because an equality check == and comparision check > < >= <= work differently.

//comaparisions convert null to a number treating it as 0. that's why in case three null >= 0 is true and in case 1 is false.

//strict check === this checks if both datatypes are of same
console.log("2" === 2); //we get false
