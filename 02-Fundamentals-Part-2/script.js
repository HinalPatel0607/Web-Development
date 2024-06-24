//Activating strict mode
"use strict";

let hasDriversLicence = false;
const passTest = true;
if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log("I can drive.");

//const interface = Audio;
//const private = 123;

//Functions

function logger() {
  console.log("My name is Hinal");
}
logger();
logger();

function foodProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = foodProcessor(5, 0);
console.log(appleJuice);

const appleOrnageJuice = foodProcessor(3, 4);
console.log(appleOrnageJuice);

const num = Number("23");

//Function Declaration vs Function Expression

//Function Declaration

function calcAge1(birthYear) {
  return 2024 - birthYear;
}

const age1 = calcAge1(1995);
console.log(age1);

//Function Expression
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};

const age2 = calcAge2(1995);
console.log(age2);

//Arrow function

const clacAge3 = (birthYear) => 2024 - birthYear;
const age3 = clacAge3(1995);
console.log(age3);

const yearsUntilRetirement = (birthYear) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsUntilRetirement(1995));

const retirementYears = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(retirementYears(1995, "Hinal"));
console.log(retirementYears(1981, "XYZ"));

//Function calling anaother Function

function cutPieces(fruit) {
  return fruit * 4;
}
function foodProcessors(apples, oranges) {
  const applepieces = cutPieces(apples);
  const orangepieces = cutPieces(oranges);
  const juice = `Juice with ${applepieces} apple pieces and ${orangepieces} orange pieces.`;
  return juice;
}
console.log(foodProcessors(4, 5));

//Reviewing function
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const yearsTillRetirement = function (birthYear, firstName) {
  const agee = calcAge(birthYear);
  const retirementt = 65 - agee;

  if (retirementt > 0) {
    console.log(`${firstName} retires in ${retirementt} years`);
    return retirementt;
  } else {
    console.log(`${firstName} has already retired.`);
  }
  return -1;
};

console.log(yearsTillRetirement(1991, "Jonas"));
console.log(yearsTillRetirement(1950, "Mike"));

//Introduction to Arrays
const friend1 = "Michael";
const friend2 = "Steven";
const freind3 = "Pater";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

//We cannot assign whole array
//friends = ["Bob", "Alice"];

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

const firstNamee = "Jonas";
const Jonas = [firstNamee, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(Jonas);
console.log(Jonas.length);

const calculateAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];
const agee1 = calculateAge(years[0]);
const agee2 = calculateAge(years[1]);
const agee3 = calculateAge(years[2]);
const agee4 = calculateAge(years[years.length - 1]);
console.log(agee1, agee2, agee3, agee4);
const ages = [
  calculateAge(years[0]),
  calculateAge(years[1]),
  calculateAge(years[2]),
  calculateAge(years[years.length - 1]),
];
console.log(ages);
