/*DOG YEAR
Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?

Here’s how you convert your age from “human years” to “dog years”:

The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.

Mission: Convert your human age into dog years
*/

//Create variale for your age
const name = "Lina";
const myAge = 32;

//Create variale for the first 2 years (since the maturity rate after the first 2 years is different)
let earlyYears = 2;
earlyYears *=10.5;

//Create variable for the rest of the years
let laterYears = myAge - 2;
laterYears *= 4;

//Convert myAge to dog year
let myAgeInDogYears = laterYears + earlyYears;

console.log(`My name is ${name}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);