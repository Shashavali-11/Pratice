// 1) Function Declaration (or) Named Function
function add(a, b) {
    return a + b;
}


// 2) Function Expression (or) Anonymous Function
const addExpression = function(a, b) {
    return a + b;
}


// 3) Arrow Function
const addArrow = (a, b) => a + b;


// 4) Anonymous Function
setTimeout(function(){
    console.log("Hi this is Ananymous function after 2 seconds")
}, 2000) // If we run this code it will print "Hi this is Ananymous function" after 2 seconds


// // 5) IIFE (Immediately Invoked Function Expression)
// (function() {
//     console.log("IIFE executed!");
// })(); // If we run this code it will execute immediately without calling it explicitly


//  6) Constructor Function
function Person(name, age){
    this.name = name;
    this.age = age;
}

const person1 = new Person("Shasha", 22);
console.log(person1.name + " this is from Constructor function."); // Shasha

