// Hoisting in JavaScript
let an = 10;
// hoisting(); // undefined
function hoisting() {
    console.log(a); // undefined
    var a = 20;
    console.log(a); // 20
}
// console.log(an) 

// Hoisting with variables: Variables declared with var are hoisted to the top of their scope, but not initialized.
// Hoisting with functions: Function declarations are hoisted to the top of their scope, and can be called before they are declared.
