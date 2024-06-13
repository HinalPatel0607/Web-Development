//Coding Challenge 1 and 2

const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const markBmi = markWeight / (markHeight * markHeight);
console.log(markBmi);

const johnBmi = johnWeight / (johnHeight * johnHeight);
console.log(johnBmi);

const markHigherBmi = markBmi > johnBmi;
console.log(markHigherBmi);

if (markBmi > johnBmi) {
  console.log(`Mark's BMI ${markBmi} is hiher than John's BMI ${johnBmi}.`);
} else {
  console.log(`John's BMI ${johnBmi} is higher than Mark's BMI ${markBmi}.`);
}

const weightMark = 95;
const heightMark = 1.88;
const weightJohn = 85;
const heightJohn = 1.76;

const bmiMark = weightMark / (heightMark * heightMark);
console.log(bmiMark);

const bmiJohn = weightJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

const highBmi = bmiMark > bmiJohn;
console.log(highBmi);

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI is higher ${bmiMark} than John's BMI ${bmiJohn}.`);
} else {
  console.log(`John's BMI ${bmiJohn} is higher than Mark's BMI ${bmiMark}.`);
}

//Coding Challenge 3

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins won the trophy🏆.");
} else if (scoreDolphins < scoreKoalas) {
  console.log("Koalas won the trophy🏆.");
} else if (scoreDolphins === scoreKoalas) {
  console.log("There is a tie so both team won the trophy🏆.");
}

const scoreDolphin = (97 + 112 + 101) / 3;
const scoreKoala = (109 + 95 + 106) / 3;
console.log(scoreDolphin, scoreKoala);

if (scoreDolphin > scoreKoala && scoreDolphin >= 100) {
  console.log("Dolphin won the trophy🏆.");
} else if (scoreDolphin < scoreKoala && scoreKoala >= 100) {
  console.log("Koala won the trophy🏆.");
} else if (
  scoreDolphin === scoreKoala &&
  scoreDolphin >= 100 &&
  scoreKoala >= 100
) {
  console.log("There is a tie so both team won the trophy🏆.");
} else {
  console.log("No one won the trophy🏆.");
}
