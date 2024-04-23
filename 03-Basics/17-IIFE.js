// IMMEDIATELY INVOKED FUNCTION EXPRESSION

//expression or syntax. the concept is same as of a function just we wrap the whole function in parethesis to make it a block and the end parenthesis act like the value taker

(function sum(){
    console.log("sum")
})();

//if we have to write more than one iife then we use semicolon at the end of first function to stop the function

(function sum1(){
    console.log("killer")
})();

//arrow function in this

(chai = () => {
    console.log("dubey")
})();