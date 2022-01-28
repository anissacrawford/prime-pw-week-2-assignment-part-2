// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it equal to Dane as a string.
// We then create a conditional that states if the name variable equals the string 'Mary', we will console.log 'Hi, Mary!'
// If the name variable is equal to anything other than 'Mary', we will console.log 'How do you do?'
// We know we already set the name variable equal to 'Dane', not 'Mary', so we will console.log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
//We make a variable named secret and do not give it a value. We make a variable named code and give it the number value of 123.
//We create a conditional that states if the code variable equals 123, then the secret variable will equal the string 'super'
//and the code variable will be multiplied by the number 2.
//If the code is greater than the number 250, the secret variable will equal the string 'duper'
//Since we already set the code variable equal to 123, and we know that if the code variable is equal to 123 then the secret variable is 'super',
//We will console.log 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//We make a variable named isStudent and set it equal to the boolean true. We make a variable named age and set it equal to the number 34.
//We make a variable named zip and set it equal to the number 55407.
//We make a conditional that states if isStudent variable is true AND zip variable is greater than 80000, we console.log `You're a student on the West Coast!`
//Since 55407 is less than 8000, we move down the conditional to the first else if which states if the isStudent variable is false OR the age variable is less than 30, we console.log 'What are your hobbies?'
//Since isStudent is true and age is greater than 30, we move down the conditional to the next else if which states if the isStudent variable is true, we console.log 'Welcome to Prime!'
//Since the isStudent variable is true, we will console.log 'Welcome to Prime'. If it were false, we would move down the conditional to the else satement
//which would console.log 'How about the weather?'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';     //FIX colorOne should be set to blue according to instructions
let colorTwo = 'blue';    //FIX colorTwo should be set to red according to instructions
let mix = true;

if (mix === true) {
  colorOne = 'purple';    //FIX add a colorTwo = 'purple'; since we want both ColorOne and ColorTwo to be set to purple, not just ColorOne
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;           //FIX this is a constant, instructions as for two variables. let time = 4; would make it a changeable variable.

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}                         //FIX Missing an else statement. This would log since the if conditional works but the variables may change so its important to have an else statement and
                             it might even create a syntax error with a missing else. could look like: else {console.log('keep the food')};
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;         //FIX this is a constant not a variable. It cannot change. let minAge = 21; would make it a variable.

if(minAge <= age) {        //FIX the symbol for greater than or equal to is >=
  console.log('no entry');
} else {
  console.log('enter');
}
*/
