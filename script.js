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
