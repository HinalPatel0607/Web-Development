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

//Basic Array operations

//Add elements
const newlength = friends.push("Peter");
console.log(friends);
console.log(newlength);

friends.unshift("John");
console.log(friends);

//Remove elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}

//Introduction to Objects
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 2019,
  "teacher",
  ["Miachel", "Pater", "Jay"],
];

const jonass = {
  fName: "Jonas",
  lName: "Schmedtmann",
  numberOfYears: 2037 - 2019,
  job: "teacher",
  batchMates: ["Miachel", "Jay", "Pater"],
};

console.log(jonass);

//Dot vs Bracket Notation
console.log(jonass.lName);
console.log(jonass["lName"]);

const nameKey = "Name";
console.log(jonass["f" + nameKey]);
console.log(jonass["l" + nameKey]);

//console.log(jonass.'l'+ nameKey) It won't work with dot notation

const interstedIn = prompt(
  "What do you want to know about Jonas? Choose between fName, lName, numberOfYears, job, and batchMates"
);

if (jonass[interstedIn]) {
  console.log(jonass[interstedIn]);
} else {
  console.log(
    "Wrong Request! Choose between fName, lName, numberOfYears, job, and batchMates"
  );
}

jonass.location = "Portugal";
jonass["twitter"] = "@jonasschmedtman";
console.log(jonass);

// "Jonas has 3 friends, and his best friend is called Michael"

console.log(
  `${jonass.fName} has ${jonass.batchMates.length} friends, and his best friend is called ${jonass.batchMates[0]}.`
);

//Object Methods/Functions/this keyword\

const Hinal = {
  firstName: "Hinal",
  lastName: "Patel",
  birthYear: 1995,
  job: "Software Developer",
  friends: ["abc", "pqr", "xyz"],
  hasDriversLicence: true,

  /* calcAge: function (birthYear) {
    return 2024 - 1995;
  },
 */
  /*   calcAge: function () {
    console.log(this);
    return 2024 - this.birthYear;
  }, */

  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and she has ${this.hasDriversLicence ? "a" : "no"} driver's license.`;
  },
};

console.log(Hinal.calcAge());
console.log(Hinal.age);
console.log(Hinal.age);
console.log(Hinal.age);

// Challenge
// "Jonas is a 29-year old Software Developer, and she has a driver's license."

console.log(Hinal.getSummary());

//Iteration for loop

console.log("Lifting weight repetition 1 💪");
console.log("Lifting weight repetition 2 💪");
console.log("Lifting weight repetition 3 💪");
console.log("Lifting weight repetition 4 💪");
console.log("Lifting weight repetition 5 💪");
console.log("Lifting weight repetition 6 💪");
console.log("Lifting weight repetition 7 💪");
console.log("Lifting weight repetition 8 💪");
console.log("Lifting weight repetition 9 💪");
console.log("Lifting weight repetition 10 💪");

for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weight repetition ${rep} 💪`);
}
