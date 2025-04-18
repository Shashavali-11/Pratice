// Write a JavaScript program where:
// • The player gets 3 chances to guess a secret number.
// • Use if/else for feedback (conditional statements).
// • Use a closure to protect the secret number.
// • Demonstrate hoisting and the temporal dead zone (TDZ).
// • Use different types of functions (normal, arrow, IIFE).
// • Use a for loop to manage attempts.


// Importing the readline module to read input from the console
const readline = require('readline');

// Using readline module to take user input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 3;

console.log("Welcome to the Number Guessing Game!");
console.log("Try to guess the number between 1 to 10.");
console.log(`You have ${attempts} attempts. Let's begin!\n`);
// console.log(secretNumber)

// Arrow function  
const startGame = () => {

    // Hoisting: The variable 'attempts' is hoisted to the top of the function scope
    if (attempts > 0) {
        rl.question("Enter your guess: ", (input) => {
            const userGuess = parseInt(input);
            console.log(`Your guess: ${userGuess}`);
            if(userGuess < 1 || userGuess > 10 ){
                console.log("Invalid input! Please enter a number between 1 to 10.");
                startGame();
                return;
            }
            if(userGuess === secretNumber) {
                console.log(`Congratulations! You guessed the correct number ${secretNumber}!`);
                console.log("\nThanks for playing! Goodbye...!");
                rl.close();
            } else {
                attempts -- ;
                if(userGuess > secretNumber) {
                    console.log("Too high! Try again.");
                } else {
                    console.log("Too low! Try again.");
                }

                if(attempts > 0) {
                    console.log(`You have ${attempts} attempts left.\n`);
                    startGame();
                }
                else {
                    console.log(`Game over! The correct number was ${secretNumber}.`);
                    console.log("\nThanks for playing! Goodbye...!");
                    rl.close();
                }
            }
        });
    } 
};

startGame();


