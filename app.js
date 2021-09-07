console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1

/* 1. Initialize an integer to represent a favorite number and assign a value with a number of your choosing or you can assign a random number to this variable.<br>
2. Use `window.prompt()` to ask the user to input a number, and store the result in a variable<br>
3. Create an if-statement that if the guessed number is below the initial value, print out “too low”.<br>
4. Create an else-if statement that if the number is higher than the initial value, print out “too high”.<br>
5. Create an else statement that prints out “Congratulations!!!”.<br> */

let favoriteNumber = 444;
let userNumber = window.prompt('Guess my favorite number');

if (userNumber < favoriteNumber) {
  console.log('Too low');
} else if (userNumber > favoriteNumber) {
  console.log('Too high');
} else {
  console.log('Congratulations! Lucky Guess');
}

// Exercise 2

// Declare a variable named userInput2 (or whatever topic you’ll ask about) and set the value to window.prompt(“Whatever question you want to ask here”).
// Inside of the parentheses, ask a question on whatever (appropriate) topic you’d like.
// Create a switch-case statement with 5+ cases and a default case.
// Log a response to the console depending on the value of userInput2.

let favoriteColor = 'purple';
let userInput2 = window.prompt('What is my favorite color?');

switch (userInput2) {
  case 'red':
    console.log('red is not my favorite color');
    break;
  case 'white':
    console.log('white is not my favorite color');
    break;
  case ('blue'):
    console.log('blue is not my favorite color');
    break;
  case ('black'):
    console.log('black is not my favorite color');
    break;
  case ('green'):
    console.log('green is not my favorite color');
    break;
  case (favoriteColor):
    console.log(`${favoriteColor} is my favorite color`);
    break;
  default:
    console.log('That is not my favorite color')
    break;
}