/*

let js = "amazing"; 
// console.log(40 + 8 + 23 - 10);





console.log("Jonas")
console.log(23);


let firstName = "Olya";

console.log (firstName);
console.log (firstName);
console.log (firstName);


let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log ("My first job was a " + myFirstJob + " and, my current job is a " + myCurrentJob)


let country = "Argentina";
let continent = "South America";
let population = 200000;
let isIsland = true;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/
/*
console.log("My homecountry is " + country + " ,which is located on " + continent + " continent. The population of the country in " + population + " people.")

console.log(typeof true);
console.log(typeof "Jonas");
console.log(typeof 22);
*/

/*
let age = 30;
age = 31; //will change to 31

const birthYear = 1991;
// birthYear = 1990; - will show the error

// const job;  const can't be undefined

var job = "programmer";
job = "teacher";
*/


// OPERATORS
/*
//Math operators
const now = 2036;
const ageOlya = now - 1991;
const ageSarah = now - 2018;
console.log(ageOlya, ageSarah);
console.log(ageOlya * 2, ageOlya / 10, 2 ** 3)
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
const firstName = "Olya";
const lastName = "Safonova";
console.log(firstName + " " + lastName);


//assignment operators
let x = 10 + 5;
console.log(x);
x+=10;// x = x + 10 =25
x*=4;//x = x * 4 =100
x++;//x = x + 1 =101
x--;//x = x - 1=100
console.log(x);
console.log(typeof x);

//comparison operators
console.log(ageOlya>ageSarah);// will display true as Olya's age is 32 and Sarah's 24

// >, <, >=, <=    

console.log(ageSarah >= 18);//gaulse as age value changed to born in 2007

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


console.log(ageOlya,ageSarah);

const averageAge = (ageOlya + ageSarah) / 2;

console.log(averageAge);
*/


// //Test data 1
// let massMark = 78;
// let heightMark = 1.69;

// let massJohn = 92;
// let heightJohn = 1.95;

// let MarkBMI = 78 / 1.69 ** 2;
// let JohnBMI = 92 / 1.95 ** 2;

// let MarkHigherBMI = MarkBMI > JohnBMI;

// console.log(MarkHigherBMI);

/*
//Test data 2
let massMark = 95;
let heightMark = 1.88;

let massJohn = 85;
let heightJohn = 1.76;

let MarkBMI = massMark / heightMark ** 2;
let JohnBMI = massJohn / heightJohn ** 2;

console.log(MarkBMI,JohnBMI);

let MarkHigherBMI = MarkBMI > JohnBMI;

console.log(MarkHigherBMI);


const firstName = "Olya";
const job = "barista";
const birthYear = 1991;
const currentYear = 2023;

const olya = "I'm " + firstName + " and my job is " + job + ". I'm " + (currentYear - birthYear) + " years old";
console.log(olya);

const olyaNew = `I'm ${firstName},
a ${currentYear - birthYear} yeard old ${job}`;
console.log(olyaNew);
*/


//IF ELSE

// const age = 12;

// if(age >= 19) {
// console.log("Sarah can start driving 🚗" );
// }
// else if(age <=18) {
//     const yearsLeft = 19 - age;
//     console.log(`sarah is too young and needs to wait ${yearsLeft} more years`);
// }
// else {
// console.log("error");
// }

// const birthYear = 2001;

// let century;

// if (birthYear <= 2000) {
//     century = 20;
// }
// else if (birthYear >= 2000) {
//     century = 21; 
// }
// console.log(century);


/*
let massMark = 95;
let heightMark = 1.88;

let massJohn = 95;
let heightJohn = 1.88;

let MarkBMI = massMark / heightMark ** 2;
let JohnBMI = massJohn / heightJohn ** 2;

console.log(MarkBMI,JohnBMI);

if (MarkBMI > JohnBMI) {

    const MarkHigherBMI = `Mark's BMI is higher than John's on ${MarkBMI-JohnBMI}`;
    console.log(MarkHigherBMI);
}

else if (MarkBMI < JohnBMI) {

    const JohnHigherBMI = `John's BMI is higher`;
    console.log(JohnHigherBMI);
}
else {
    console.log("Their BMI are equal");
}
*/
//type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) +18);

//type coersion

// five falsy values are : '', 0' undefined, NaN, null

// const age = 18;

// if(age === 18) console.log('you just became an adult(strickt)');

// if(age == 18) console.log('you just became an adult(loose)');

// const favorite = Number(prompt("What's your favorite number?"));

// console.log(favorite);
// console.log(typeof favorite);

// if(favorite === 23) {
//     console.log("Cool!23  is a good number");}
// else if(favorite === 7) {
//     console.log("seven is also a good number");}
// else {console.log("Number is not 7 or 23")}

// if(favorite !== 23) {
//     console.log("why not 23?");
// }


// //LOGICAL OPERATORS

// const hasDrivingLicense = true;//A
// const hasGoodVision = true;//B
// const shoulDrive = hasDrivingLicense && hasGoodVision;


// console.log(hasDrivingLicense && hasGoodVision);
// console.log(hasDrivingLicense || hasGoodVision);
// console.log(!hasDrivingLicense);

// // if(shoulDrive){
// //     console.log("Sarah  can drive");
// // }
// // else {console.log("someone else should drive");
// // }

// const isTired = false; //C

// console.log(hasDrivingLicense && hasGoodVision && !isTired);

// if(shoulDrive){
//     console.log("Sarah  can drive");
// }
// else {
//     console.log("someone else should drive");
// }



//challenge 3
/*

let dolphinsScore1 = 97;
let dolphinsScore2 = 112;
let dolphinsScore3 = 101;

let koalasScore1 = 109;
let koalasScore2 = 95;
let koalasScore3 = 106;

const averageScoreDolphins = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const averageScoreKoalas = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
const draw = averageScoreDolphins === averageScoreKoalas;

console.log(averageScoreDolphins, averageScoreKoalas);

if(averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {

    console.log("Dolphins are the winners");
}

else if(averageScoreDolphins < averageScoreKoalas && averageScoreKoalas >= 100) {

    console.log("Koalas are the winners");
}

else if(draw && averageScoreDolphins >=100 && averageScoreKoalas >= 100) {

    console.log("There has bee draw");
}
else {

    console.log("No winners. A minimum of 100 points required to win");
}
*/


// THE SWITCH STATEMENT

/*
const day = "saturday";

switch (day) {

    case 'monday':
        console.log("it's monday");
        break;

    case 'tuesday':
        console.log("it's tuesday");
        break;
    
    case 'wednesday':
        console.log("it's wednesday");
        break;

    case 'thursday':
        console.log("it's thursday");
        break;

    case 'friday':
        console.log("it's friday");
        break;
    case 'saturday':
    case 'sunday':
    console.log("it's the weekend");
        break;
        default:
    console.log("Not a valid day");
        
}
*/

//The conditional statement

// const age = 11;
// age >= 18 ? console.log("I like to drink wine") : console.log("I drink water 💧");


// const drink = age >= 18 ? 'wine' : 'water';

// console.log(drink);


//CHALLENGE #3
/*

let bill = 430 ; 

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log (`The tip is  ${tip}% of the bill. The tip amount is ${tip} $ 
and the final value is ${Number(bill) + Number(tip)}`);
*/



