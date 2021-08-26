console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1
let favoriteNumber = 444;
let userNumber = window.prompt('Guess my favorite number');

if (userNumber < favoriteNumber) {
  window.prompt('Too low');
} else if (userNumber > favoriteNumber) {
  window.prompt('Too high');
} else {
  window.prompt('Congratulations! Lucky Guess');
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
    window.prompt('red is not my favorite color');
  break;
  case 'white':
    window.prompt('white is not my favorite color');
  break;
  case ('blue'):
    window.prompt('blue is not my favorite color');
  break;
  case ('black'):
    window.prompt('black is not my favorite color');
  break;
  case ('green'):
    window.prompt('green is not my favorite color');
    break;
  case ('purple'):
    window.prompt('purple is my favorite color');
    break;
  default:
    window.prompt('That is not my favorite color')
    break;
}