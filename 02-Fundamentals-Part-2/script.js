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
