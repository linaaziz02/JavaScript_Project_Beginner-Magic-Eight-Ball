/*MAGIC EIGHT BALL
You’ve learned a powerful tool in JavaScript: control flow! It’s so powerful, in fact, that it can be used to tell someone’s fortune.

In this project we will build a Magic Eight Ball using control flow in JavaScript.

The user will be able to input a question, then our program will output a random fortune.*/

let userName = "Lina";

userName? console.log(`Hello, ${userName} !`) : console.log("Hello!"); //note: ternary operator

//Create a variable - a string that is the question the user wants to ask the Magic Eight Ball
const userQuestion = `Will ${userName} be able to become a Software Engineer?`; 
console.log(userQuestion);

//Generate a random number between 0 and 7
const randomNumber = Math.floor(Math.random() * 8); //Math.floor round off a number. Math.random generate random number.

//Create a variable named eightBall. We will save a value to this variable in the next steps, depending on the value of randomNumber.
let eightBall = ""; //Technically, you can still run this code without declaring this variable. However, it won't work if you are in a strict more (try adding "use strict" at the top of the page)

/*Create a control flow that takes in the randomNumber, then assigns eightBall to a reply that a Magic Eight Ball would return.
*Think about utilizing if/else or switch statements.
*8 Magic Eight Ball phrases that we'd like to save to the variable eightBall:
1. 'It is certain'
2. 'It is decidedly so'
3. 'Reply hazy try again'
4. 'Cannot predict now'
5. 'Do not count on it'
6. 'My sources say no'
7. 'Outlook not so good'
8. 'Signs point to yes'*/

switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1: 
    eightBall = "It is decidedly so";
    break;
  case 2: 
    eightBall = "Reply hazy try again";
    break;
  case 3: 
    eightBall = "Cannot predict now";
    break;
  case 4: 
    eightBall = "Do not count on it";
    break;
  case 5: 
    eightBall = "My sources say no";
    break;
  case 6: 
    eightBall = "Outlook not so good";
    break;
  case 7: 
    eightBall = "Signs point to yes";
    break;
}

console.log(`The Magic Eight Ball says ${eightBall}.`)
