// JAVASCRIPT FUNDAMENTALS

/*
CLASS 1
console.log("This is an external js file");
const btn = document.getElementById("btn"); // Got to html and pick this button with the id
btn.addEventListener("click", function () {
  // listen for a click and perform this function
  console.log("A Button has been clicked"); // display this in the console.
});

// Statements and Semicolon
let x = 100; // example of a statement
let y = 20; // example of a statement

console.log(x + y);

const z = "Donata";
let w = "temi";

// ewhfduiadsdah


let myVariable = "This is a value"; // camelCase
let myvariable = "Hello World!"; // lower case
let myvariablE = "Hello World!"; // lower case

let fName =
  "Richard is a guy jgrwusg jfhsgsjf fbhfjeadsqwjiead fhgbfdhasfdz fhsfuadhsfjz";

console.log(myVariable, myvariable, myvariablE);

console.log(fName);
console.log("lName");

// Three ways of declaring variables
// var

// let

// Declared
let age = 25;
let lName = "David";

// reassigning
age = 26;
lname = "ny name";

// const
const PI = 3.14;
*/

/*
CLASS 2
// Creating Variables
// const
const countryName = "Nigeria";
console.log(countryName);

const birthYear = 2000;
console.log(birthYear);

// const countryName = "Ghana";

// countryName = "Ghana";

// let
let age = 19; // Declared
console.log(age); // 19

let currentUser = "Alex";
console.log(currentUser);

// let age = 30;
age = 20;
console.log(age); // 20

age = 21;

console.log(age);

// var lastName = "Abdul";
// console.log(lastName);

// var lastName = "Sarah";
// console.log(lastName);

// lastName = "Ridwan";
// console.log(lastName);

// Shopping Cart Counter
let cartCount = 0;

cartCount = cartCount + 1; // 1

cartCount = cartCount + 1; // 2

cartCount = cartCount + 1; // 3
console.log("Old Cart Count:", cartCount);

cartCount = cartCount - 1;
console.log("New Cart count", cartCount);

let firstName = "Abigal is a girl. She likes to kfs";
console.log(firstName);

// let a = true;
// console.log(a);
let isGravityLoading = true;

// Numbers
const price = 20 + 28.2 + 30;
console.log(price);

// String
const fName = "Jordan";
const lName = "Bilal";
const fullName = fName + " " + lName;
console.log(fullName);

let a = "10";
let b = "15";
let c = "20";
console.log(a + b + c);

// Booleans
let isUserLoggedIn = false;
console.log(isUserLoggedIn);

isUserLoggedIn = true;
console.log(isUserLoggedIn);

let hasPermission = false;

// Undefined
let lastName; // Declared but not assigned yet
console.log(lastName);

lastName = "Alex"; // reassigned
console.log(lastName);

// Null
let emptyValue = null;
console.log(emptyValue);

// console.log(typeof null);
// console.log(typeof undefined);

// Complex Data Types
let person1 = {
  //key : value
  fullName: "Abba Abdul",
  age: "20",
  isMarried: true,
  course: "",
  birthYear: 2000,
  // hobby: "Music",
  hobby: ["Music", "Reading", "Football"],
};

console.log(person1);
console.log(person1.age);
console.log(person1.birthYear);

person1.age = 25;
console.log(person1.age);

person1.hobby = "Reading";
console.log(person1.hobby);

person1.gender = "male";

// Array
const arrayNumbers = [1, 2, 3, 4];
const arrayOfFruits = ["apple", "orange", "grape"]; // arrays are zero index based
console.log(arrayNumbers);
console.log(arrayOfFruits);

arrayOfFruits[3] = "banana";
console.log(arrayOfFruits[2]);
console.log(arrayOfFruits);
console.log(person1);
*/

/*
// CLASS 3
// Type Checking
// typeof Operator

// const calculate = () => {};

// console.log(typeof "Hello");
// console.log(typeof 90);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null); // a bug
// console.log(typeof []); // object
// console.log(typeof {}); // object
// console.log(typeof { fName: "John" }); // object
// console.log(typeof "80"); // string
// console.log(typeof calculate); // function

// Type Conversion
// To change from a string to a number
// Number(), parseInt(), parseFloat, +

let str = "123";
// console.log(typeof str); // string
// str = Number(str);
// str = parseInt(str);
// console.log(typeof str); // number

let num2 = "234";
// console.log(typeof num2); // string

// num2 = +num2;
// console.log(typeof num2);
// "9" + 8 = 98

// type coersion
let num3 = num2 + str;
// console.log(num3); // 234123

num3 = num2 - str;
// console.log(num3); // 234123

// parseFloat("24.23")

// let str2 = "Hello";
// str2 = parseInt(str2); // converting to a number
// console.log(typeof str2);
// console.log(str2 + 9);

// To change from a number to a string
// String(), toString()

let num4 = 124;
// num4 = num4.toString();
// num4 = String(num4);
num4 = num4 + "";
// console.log(typeof num4);

// Boolean conversion
// Boolean()

// True --> truthy values
console.log(Boolean(true));
// console.log(Boolean("Hello"));
// console.log(Boolean(32));
// console.log(Boolean({}));
// console.log(Boolean([]));
// console.log(Boolean({ fName: "John" }));
// console.log(Boolean(4 > 2));
// console.log(Boolean(-5));

// false -->
console.log(Boolean(2 > 4));

console.log(Boolean(false)); // 1
console.log(Boolean(0)); // 2
console.log(Boolean(null)); // 3
console.log(Boolean(undefined)); // 4
console.log(Boolean("")); // 5
// console.log(Boolean(-0));

// Concatenation
let firstName = "Dami";
let lastName = "Kola";
let countryName = "Nigeria";
let city = "Ibadan";
let age = 20;
let space = " ";

let profile = {
  firstName: "Dami",
  lastName: "Kola",
  password: "",
};

// +
// const aboutMe =
//   "My" +
//   space +
//   "name" +
//   space +
//   "is" +
//   space +
//   firstName +
//   space +
//   lastName +
//   "." +
//   "I" +
//   space +
//   "am" +
//   space +
//   age +
//   "years" +
//   space +
//   "old";

// console.log(aboutMe);

// ${}
// backtik
const aboutMe2 = `My name is ${firstName} ${lastName}. I am ${age}years old. I live in ${city}, ${countryName}.`;
console.log(aboutMe2);

// Operators
// Arithmetic Operators --> +, -, *, /, %

let x = 5;
let y = 10;

console.log(x + y);
console.log(y - x);
console.log(y * x);
console.log(y / x);
console.log(y % x); // 0
console.log(3 % 2); // 1
console.log(5 % 2); // 1
console.log(5 % 3); // 2
console.log(10 % 3); // 1

// Assignment Operators --> =, +=, -=, *=, /=, %=

let z = 20;

z += 5; // z = z + 5 // 25
console.log(z); // 25

z += 10; // z = z + 10
console.log(z);

z -= 5; // z = z - 5
console.log(z); // 30

z /= 10; // z = z / 3 // 3
console.log(z);

z **= 4; // 3 * 3 * 3 * 3 = 81
console.log(z);
*/

/*
// CLASS 4

// Comparison Operators --> <, >, == (loose equality), === (strict equality), >= greater or equal-to, <=, != (loosely), !== (strictly)
// const isBoolean = 5 < 4;
// // console.log(isBoolean);

// console.log(5 == "5"); // values are equal
// console.log(5 === "5"); // values are equal and data types are same

// console.log(2 != 2);
// console.log(2 !== "2");

// console.log("Hello" == "Hello");

// console.log(2 >= 2);
// console.log(3 >= 2);

// Logical Operators --> && (AND), || (OR), ! (NOT)
// && (AND)
// console.log(true && true); // true
// console.log(false && true && true && true && true && true); // false
// console.log(false && true); // false
// console.log(false && false); // false

// console.log("This LINE is ", 5 < 3 && 5 != 3 && "Correct"); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false

// || (OR)
// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || false || false || true || false || false); // true
// console.log(false || false); // false

// isLoggedIn && {"Hello username"}

// console.log(!true);
// console.log(!false);

// console.log(!(5 > 4));

// let age = 20;
// let hasLicense = true;

// if (age >= 18 && hasLicense) {
//   console.log("Permission granted");
// }

// age >= 18 && hasLicense
//   ? console.log("Permission granted")
//   : "You cannot get a license yet";

// Unary Operators --> increment (pre, post)

let count = 0;
console.log(count); // 0
count++;
// count = count++; // = count + 1;

// count + 1 === count++
console.log(count); // 1

// Conditional Statement
// if

// let num = prompt("Enter a number: ");
let num = 5;

// if (num < 0) {
//   // console.log(num + " is a positive number");
//   console.log(`${num} is a negative number`);
// }

// if.... else

if (num >= 0) {
  console.log(`${num} is a positive number`);
} else {
  console.log(`${num} is a negative number`);
}

let username = "Bumi";
let isLoggedIn = true;

if (username === "Bumi" && isLoggedIn) {
  console.log(`Welcome ${username}`);
} else {
  console.log(`Username or password invalid`);
}
  */

/*
// CLASS 5

// let age = 30;
// let hasLicense = false;

// if (age > 17 && hasLicense) {
//   console.log(`You are to drive`);
// } else {
//   console.log(
//     `You are not permitted. You have ${age < 18 ? 18 - age : 0} years remaining`,
//   );
// }

// else ...if
// example: if a number is negative, postive or equal 0
// isNaN()
// let num = prompt("Please input a number: ");
// // console.log(isNaN("hello"));
// // Number(num);

// if (num < 0) {
//   console.log(`${num} is a negative number`);
// } else if (num > 0) {
//   console.log(`${num} is a positive number`);
// } else if (num === 0) {
//   console.log(`${num} is equal to 0`);
// } else {
//   console.log("Please input a valid number");
// }

// console.log(score);

let score = 105;

// score --> 90 and above Grade A
// score --> 80 and 90 Grade B
// score --> 70 and 80 Grade C

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 80) {
  console.log("Grade B");
} else if (score >= 70) {
  console.log("Grade C");
} else {
  console.log("Try again");
}

// Switch Statement
// Print out the day of the week

// let day = prompt("Input a day of the week: ");
// console.log(day);

// day = day.toLowerCase();
// console.log(day);

// switch (day) {
//   case "sunday":
//     console.log("It is weekend!");
//     break;

//   case "monday":
//     console.log("Today is Monday");
//     break;

//   case "tuesday":
//     console.log("Today is Tuesday");
//     break;

//   case "wednesday":
//     console.log("Today is Wednesday");
//     break;

//   case "thursday":
//     console.log("Today is Thursday");
//     break;

//   case "friday":
//     console.log("Today is Friday");
//     break;

//   case "saturday":
//     console.log("Today is Saturday");
//     break;

//   default:
//     console.log("TPlease inpout a valid day");
//     break;
// }

let num = 0;

switch (true) {
  case num > 0:
    console.log(`${num} is a positive number)`);
    break;

  case num < 0:
    console.log(`${num} is a negative number`);
    break;

  case num === 0:
    console.log(`${num} is equal to 0)`);
    break;

  default:
    console.log("Please Input a valid number");
    break;
}

document.getElementById("nameOfId").addEventListener("click", function () {
  BigInt.addCla.removeClas;
});
*/

/*
// ClASS 5
// Print out numbers 0 - 10
console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

// The for loop
// x = 1
// 1s = x (1) (2) (3) < 3 YES. YES. NO
// x = x + 1. = 2
// x = x + 1. = 3

for (let x = 1; x < 5; x = x + 1) {
  console.log('Numbers');
}

// for (let x = 0; x < 11; x = x + 1) {
//   // console.log("Numbers", x);
//   console.log(`Numbers ${x}`);
// }

// x = 10
// x >= 0
// x = x - 1
// for (let x = 10; x >= 5; x = x - 1) {
//   console.log(`Numbers ${x}`);
// }

// Odd numbers between 0 and 20
// i = i + 1. /// i++
// i = i + 2. /// i+=2
// i = i + 5 /// i+=5
for (let i = 0; i < 101; i++) {
  if (i % 2 === 1) {
    console.log(`Even ${i}`); //
  }
}

//  For lopp with array

let numbers = [1, 2, 3, 4, 5];
// nameOfArray.length

// console.log('Length of Numbers in the array', numbers.length);
// let string = 'Hello, Welcome';
// console.log('Length of characters in the string', string.length);
// let num = 4;
// console.log('Length of number in the number', num.length);

for (let i = 1; i <= numbers.length; i++) {
  console.log(i);
}

let countriesArray = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
// console.log(countriesArray[0]); // finland
// console.log(countriesArray[1]); // sweden
// console.log(countriesArray[2]);
// console.log(countriesArray[3]);
// console.log(countriesArray[4]);

for (let i = 0; i < countriesArray.length; i++) {
  console.log(countriesArray[i]);
}

let fruitsArray = ['apple', 'guava', 'banana', 'grape', 'lemon'];
// console.log(fruitsArray[0]);
// console.log(fruitsArray[4]);
// console.log(fruitsArray[4]);
// console.log(fruitsArray[4]);

for (let i = 0; i < fruitsArray.length; i++) {
  console.log(fruitsArray[i]);
}

let namePlace = 'Ghana';
namePlace = namePlace.split(''); // split method convert string to an array

for (let i = 0; i < namePlace.length; i++) {
  console.log(namePlace[i]);
}
*/

// CLASS 6
// While Loop

// syntax
// intialization
// while (condition)
// {
// code block
// updater: increment/decrement
// }

let i = 1;
while (i <= 10) {
  console.log(i, 'Hello World');
  i++;
}

// let num = 1; // 2 3 4 5
// let total = 0; // 1  3  6  9

// while (total <= 10) {
//   total = total + num; // increasing
//   console.log(total);
//   // console.log(num);
//   num++; // num is increasing
// }
// console.log(total);

// Do while
let x = 15; // initializer
do {
  console.log(x, 'Do While'); // code block
  x++; // updater
} while (x <= 10); // codition

let links = [];

for (let i = 0; i < links.length; i++) {
  html.textContent = links[i];
}

// FUNCTION

// syntax
//function functionName () {
// code block
// }
// functionName() // running a function

// Greet a User
// function greetUser(firstName) {
//   // parameter
//   console.log(`Hello, ${firstName}`);
//   // console.log('Welcome to Class Today');
//   // console.log('Today is Friday');
// }
// greetUser('Donata'); // argument
// greetUser('Moh');

// // console.log('Hello, User');

// greetUser('Evans');
// greetUser('Daniel');
// greetUser('Tayo');

const something = () => {
  console.log(`Hello, Daniel`);
};
something();
