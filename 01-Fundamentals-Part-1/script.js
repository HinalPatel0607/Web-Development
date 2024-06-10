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
