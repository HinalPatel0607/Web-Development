//Linking Javascript File
let js = "amazing";
if (js === "amazing") alert("Javascript is FUN");
console.log(4 + 28 + 23 - 10);

//Values and Variables
console.log("Jonas");
console.log(23);

let firstName = "Hinal";

console.log(firstName);
console.log(firstName);

//Variable Name convention

let hinal_patel = "HM";
let $function = 27;

let person = "Hinal";
let PI = 3.14;

let myFirstJob = "Web Analyst";
let myCurrentJob = "Software Developer";

console.log(myCurrentJob);

//Datatypes

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 3.14);
console.log(typeof 27);
console.log(typeof "Hinal");

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1995;
console.log(typeof year);

let a = null;
console.log(typeof null);

//let, const and var

let age = 30;
age = 31;
console.log(age);

const birthYear = 1995;
//birthYear = 1996;
console.log(birthYear);
//const job;

var job = "Web Analyst";
job = "Software Developer";

lastName = "Patel";
console.log(lastName);

//Basic Operators

//Math operators or Arithmetic operators

const now = 2045;
const ageHinal = now - 1995;
const ageNishit = now - 1998;
console.log(ageHinal, ageNishit);

console.log(ageHinal * 2, ageHinal / 10, 2 ** 3);

const fNmae = "Hinal";
const lNAme = "Patel";
console.log(fNmae + " " + lNAme);

//Assignemet Operators.
let x = 10 + 5;
console.log(x);

x += 10;
console.log(x);

x *= 4;
console.log(x);

x++;
console.log(x);

x--;
console.log(x);

x--;
console.log(x);

//Comparision operator

console.log(ageHinal > ageNishit);
console.log(ageNishit >= 18);

const isFullAge = ageNishit >= 18;
console.log(isFullAge);

console.log(now - 1995 > now - 1998);

//Operator Precedence

let p, q;
p = q = 25 - 10 - 5;
console.log(p, q);

const averageAge = (ageHinal + ageNishit) / 2;
console.log(ageHinal, ageNishit, averageAge);

//Strings and Template literals

console.log(firstName);
console.log(job);
console.log(birthYear);
const currentYear = 2024;

const finalString =
  "I'm" +
  " " +
  firstName +
  " " +
  ", a" +
  " " +
  (currentYear - birthYear) +
  " " +
  "years old" +
  " " +
  job +
  "!";
console.log(finalString);

const newFinalString = `I'm ${firstName}, a ${
  currentYear - birthYear
} years old ${job}!`;
console.log(newFinalString);

console.log(
  `This is just a regular string. I can ba also encolsed with backticks apart from single and double quotes.`
);

console.log(
  "Srring with \n\
    multiple \n\
    lines"
);

console.log(`String with
    mulitiple
    lines`);

//If-else

const agee = 12;
if (agee >= 18) {
  console.log("Hinal is eligible for driver's licence 🚗🚗");
} else {
  const yearsLeft = 18 - agee;
  console.log(
    `Hinal is still not eligible for driver's licence. Wait for another ${yearsLeft} years ☹☹.`
  );
}

const yaerOfBirth = 2012;
let century;
if (yaerOfBirth <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

//Type Conversion

const inputYear = "1995";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Hinal"));
console.log(typeof NaN);

console.log(String(23), 23);

//Type Coercion
console.log(`I am 23 years old`);
console.log("I am " + 23 + " yeras old");

console.log("23" + "10" + "3");
console.log("23" - "10" - "3");
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);

console.log(2 + 3 + 4 + "5");
console.log("10" - "4" - "3" - 2 + "5");

//Truthy and Falsy values
//5 Falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Hinal"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a Job");
}

let height = 0;
if (height) {
  console.log("YAY height is defined");
} else {
  console.log("Height is undefined.");
}

//Equality operators === vs == and !== vs !=

const numberOfYears = "18";

if (numberOfYears === 18) console.log("You are an adult. (strict)");

if (numberOfYears == 18) console.log("You are an adult.(loose)");

const favourite = Number(prompt("What is your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number");
} else if (favourite === 7) {
  console.log("7 is also an cool number");
} else if (favourite === 9) {
  console.log("9 is also an cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("Why not 23?");

//Logical operators

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log("Hinal is able to drive.");
} else {
  console.log("Someone else should drive.");
}

const isTired = false;
console.log(hasDriversLicense && hasDriversLicense && isTired);

if (hasDriversLicense && hasDriversLicense && !isTired) {
  console.log("Hinal is able to drive");
} else {
  console.log("Someone else should drive");
}

//The swith statement

const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Plan the course structure");
    console.log("Go to coding meetup");
    break;
  case "Tuesday":
    console.log("Prepare theory videos");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("Write code examples");
    break;
  case "Friday":
    console.log("Record videos");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "Monday") {
  console.log("Plan the course structure");
  console.log("Go to coding meetup");
} else if (day === "Tuesday") {
  console.log("Prepare theory videos");
} else if (day === "Wednesday" || day === "Thursday") {
  console.log("Write code examples");
} else if (day === "Friday") {
  console.log("Record videos");
} else if (day === "Saturday" || day == "Sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day");
}
//Statements and Expression

console.log(3 + 4);
console.log(1995);
console.log(true && false && !false);

if (23 > 10) {
  const str = "23 is bigger";
  console.log(str);
}

const me = "Hinal";
console.log(`I'm ${2025 - 1995} years old ${me}.`);

//The Conditional Operator(Ternary Operator)

const aage = 23;
aage >= 18
  ? console.log("I like to drink wine🍷")
  : console.log("I like to drink water🥛");

const drink = age >= 18 ? "wine🍷" : "water🥛";
console.log(drink);

let drinkk;
if (age >= 18) {
  drinkk = "wine🍷";
} else {
  drinkk = "water🥛";
}
console.log(drinkk);

console.log(`I like to drink ${age >= 18 ? "wine🍷" : "water🥛"}`);
