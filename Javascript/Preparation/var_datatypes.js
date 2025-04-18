
// Variables declared with var are hoisted to the top of their scope, but not initialized. 
var ab = 10;  
let abc = 20;
const abcd = 30;
// ------------------------------------------------------------------------------------------------------------------------------------->

// Data types in JavaScript

// // Primitive data types: string, number, boolean, null, undefined, symbol, bigint
// let str = "Hello, World!"; // string
// let num = 42; // number
// let bool = true; // boolean
// let nll = null; // null
// let undf = undefined; // undefined
// let sym = Symbol("unique"); // symbol
// let bigInt = BigInt(1234567890123456789012345678901234567890); // bigint

// let ssy = typeof sym === "symbol"
// console.log(typeof ssy) // true; 
// console.log(typeof (typeof ssy)) // string;

// ------------------------------------------------------------------------------------------------------------------------------------->

// // Non-primitive data types: object, array, function

let obj = { name: "John", age: 30 }; // object
let arr = [1, 2, 3, 4, 5]; // array
let func = function() { return "Hello, World!"; }; // function
let func2 = () => { return "Hello, World!"; }; // arrow function
let func4 = function namedFunction() { return "Hello, World!"; }; // named function expression
let func3 = function() { return "Hello, World!"; }; // function expression
let func5 = function() { return "Hello, World!"; }; // function declaration


