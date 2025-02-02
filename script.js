// Part 1: Arithmetic Operators (+, -, *, /, %, **)

let num1 = 10;
let num2 = 20;

console.log("The addition result: ", num1 + num2);
console.log("The subtraction result: ", num1 - num2);
console.log("The multiplication result: ", num1 * num2);
console.log("The division result: ", num1 / num2);
console.log("The modulus result: ", num1 % num2);

// Fixed power calculation using ** operator
console.log("The power result: ", num1 ** num2);  // or Math.pow(num1, num2)

// Part 2: Relational Operators (>, <, >=, <=, ===, !==)

console.log("Is num1 greater than num2?", num1 > num2);
console.log("Is num1 less than num2?", num1 < num2);
console.log("Is num1 less than or equal to num2?", num1 <= num2);
console.log("Is num1 greater than or equal to num2?", num1 >= num2);
console.log("Is num1 same type and value as num2?", num1 === num2);
console.log("Is num1 different in value or type from num2?", num1 !== num2);

// Part 3: Logical Operators (&&, ||)

let isSunny = true;
let isWeekend = true;

console.log("Is it good for a picnic?", isSunny && isWeekend);  // both need to be true
console.log("Is it sunny or the weekend?", isSunny || isWeekend);  // either can be true

// Part 4: Compound Assignment with a score variable

let score = 40;
score += 5;  // Adds 5 to score
console.log("New score after addition:", score);

score *= 2;  // Multiplies score by 2
console.log("New score after multiplication:", score);

// Part 5: User Interaction - Using prompt to capture name and age

let userName = prompt("Please enter your name:");
let userAge = prompt("Please enter your age:");

console.log("User's name:", userName);
console.log("User's age:", userAge);
