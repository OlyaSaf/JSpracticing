'use strict';
/*

function fruitProcessor(apples, oranges) {

    console.log(apples, oranges);
    const juice = `Juice  with ${apples} apples and ${oranges} oranges.`;
    return juice;
}


const appleJuice = fruitProcessor(10, 7);
console.log(appleJuice);


//declaration
function calcAge(birthYear) {
    return 2023 - birthYear;
}
const age1 = calcAge (1991);
console.log(age1);

//expression

const calcAge2 = function(birthYear) {
    return 2023 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age2);

*/

//Arrow function
/*
const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirenment = (birthYear, firstName) => {

const age = 2023 - birthYear;
const retirenment = 65 - age;
// return retirenment;
return `${firstName} retires in ${retirenment} years.`;
}
console.log(yearsUntilRetirenment(1991, "Olya"));
console.log(yearsUntilRetirenment(1983, "Bob"));
*/

/*
function cutFruitPieces(fruit) {
return fruit * 6;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
   
    const juice = `Juice  with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
    return juice;
}

console.log(fruitProcessor(2,1));
*/


/*
const calculateAge = function(birthYear){
   return 2023 - birthYear;
}

const yearsUntilRetirenment = function(birthYear, firstName){

    const age = calculateAge(birthYear);
    const retirenment = 65 - age;

    
    if(retirenment >= 0){
        console.log (`${firstName} will retire in ${retirenment} years.`);
        return retirenment;
    }
    else {
        console.log (`${firstName} you are already retired.`);
        return -1;
    }
    
    // return `${firstName} retires in ${retirenment} years.`;
    }

  
   console.log(yearsUntilRetirenment(1991, "Olya"));
   console.log(yearsUntilRetirenment(1930, "Mark"));

    */

   //Challenge 1 -functions
   /*
   const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
    // console.log(calcAverage(3,4,4));
   
    let averageScoreDolphins = calcAverage(20, 20, 12);
    let averageScoreKoalas = calcAverage(1, 2, 2);
    console.log(averageScoreDolphins, averageScoreKoalas);

   const checkWinner = function (averageScoreDolphins, averageScoreKoalas)  {
    if(averageScoreDolphins >= averageScoreKoalas * 2){
        console.log(`Dolphins win ${averageScoreDolphins} vs ${averageScoreKoalas}`);
    }
    else if(averageScoreKoalas >= averageScoreDolphins * 2){
        console.log(`Koalas win ${averageScoreDolphins} vs ${averageScoreKoalas}`);
    }
    else{
        console.log(`no team wins...`)
    }
    
   }
   checkWinner(averageScoreDolphins,averageScoreKoalas);

    averageScoreDolphins = calcAverage(44, 23, 71);
    averageScoreKoalas = calcAverage(65, 54, 49);
    console.log(averageScoreDolphins, averageScoreKoalas);
    checkWinner(averageScoreDolphins,averageScoreKoalas);
    */


//Arrays
/*

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends); 

//or another way to write an array

const years1 = new Array(1991, 1984, 2008, 2020);
console.log(years1);
 
    console.log(friends[2]);
    console.log(friends.length);
    console.log(friends[friends.length-1]);
   
    friends[2] = "J";
    console.log(friends);

    const firstName ='Olya';
   
const olya = [firstName,'Safonova', 2023 - 1991, 'teacher', friends];
console.log(olya);
console.log(olya.length);

//Exercise

const calcAge = function (birthYear) {
    return 2023 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1,age2,age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1]), ];
console.log(ages);
*/

//Methods
/*

const friends = ['Fedor','Dima', 'Martin'];

//add elements
const newLenght = friends.push('Lera');
console.log(friends);
console.log(newLenght);

friends.unshift('Thomas');
console.log(friends);

//remove elements
friends.pop();//last
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();//fisrst
console.log(friends);

console.log(friends.indexOf('Fedor'));
console.log(friends.indexOf('Lera'));

friends.push(23);
console.log(friends.includes('Fedor'));
console.log(friends.includes('Lera'));
console.log(friends.includes(23));


if(friends.includes('Fedor')) {
    console.log('You have Fedor')
}

*/


//challenge task
/*


const calcTip = function(bill) {
    let tip;

    if(bill > 50 || bill < 300) {
        tip = bill * 0.15;
   }
   else{
        tip = 0.20 * bill;
   }
   return tip;
}


console.log(`The tip amount is ${calcTip(100)} $`);

const bills = [125, 555, 44];

const tips = [(calcTip(bills[0])), (calcTip(bills[1])), (calcTip(bills[2]))];
console.log(bills);
console.log(tips);

const total = [(bills[0] + tips [0]), (bills[1] + tips [1]), (bills[2] + tips [2])];
console.log(total);
*/

//OBJECTS

//declare the object olya with 5 properties
/*
const olya = {
    firstName: 'Olya',
    lastName: 'Safonova',
    age: 2023 - 1991,
    job: 'teacher',
    friends: ['Fedor', 'Dima', 'Martin']
};
console.log(olya);
console.log(olya.lastName);
console.log(olya['lastName']);

const nameKey = 'Name';
console.log(olya['first' + nameKey]);
console.log(olya['last' + nameKey]);

// const interestedIn = prompt(`What do you want to know about Olya?
//  Choose between firstName, lastName, age, job, and friends`)
//  console.log(olya[interestedIn]);

 olya.location = 'New Zealand';
 olya['twitter'] = '@blablabla';
 console.log(olya);

 
 //challenge
 console.log(`${olya.firstName} has ${olya.friends.length} friends and her best friend is called ${olya.friends[0]} `);
*/


//ARRAYS
/*

 const olya = {
    firstName: 'Olya',
    lastName: 'Safonova',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Fedor', 'Dima', 'Martin'],
    hasDriverLicense: false,

    // calcAge: function(birthYear){
    //     return 2023 - birthYear;
    // }

    calcAge: function(){
        // console.log(this);
        this.age = 2023 - this.birthYear;
        return this.age;
    },

getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} - year old ${this.job}, and she has ${this.hasDriverLicense ? 'a' : 'no'} driver's licence
    . `}

};
console.log(olya.calcAge());
//same , but called differen ways

console.log(olya.getSummary());

*/


//Objects challenge
/*


const mark = {
    fullName: 'Mark Miller',
    weight: 78,
    height: 1.69,

    calcBMI: function(){
        this.bmi = this.weight/this.height * 2;
        return this.bmi;
    }
}
const john = {
    fullName: 'John Smith',
    weight: 92,
    height: 1.96,

    calcBMI: function(){
        this.bmi = this.weight/this.height * 2;
        return this.bmi;
    }
}

console.log(mark.calcBMI());
console.log(john.calcBMI());

console.log(`${mark.fullName}'s BMI 
${mark.bmi} is ${mark.bmi > john.bmi ? 'higher' : 'lower'}
 than ${john.fullName}'s BMI ${john.bmi}`);
 */

 //FOR LOOP

/*
 for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lift weights repetition ${rep}`);
 }
 */

 /*
 const olya = [
  'Olya',
   'Safonova',
    2023 - 1991,
 'teacher',
'Fedor', 'Dima', 'Martin',
true
];
 
 for( let i = 0; i <= olya.length; i++){
console.log(olya[i], typeof (olya[i]));

 }



 const years = [1991, 2005, 1999, 2018];
 const ages = [];

 for(let i = 0; i < years.length; i++ ){
   
    ages.push(2023 - years[i]);
 }
 console.log(ages);

 //continue and break
console.log('------- STRINGS ONLY --------')
 for(let i = 0; i < years.length; i++ ){
    if(typeof olya[i] !== 'string') continue;
   
    console.log(olya[i], typeof olya[i]);
 }




 console.log('------- BREAK WITH NUMBER --------')
 for(let i = 0; i < years.length; i++ ){
    if(typeof olya[i] === 'number') break;
   
    console.log(olya[i], typeof olya[i]);
 }

*/

/*
const olya = [
    'Olya',
     'Safonova',
      2023 - 1991,
   'teacher',
  'Fedor', 'Dima', 'Martin',
 
  ];
  for(let i = olya.length - 1; i >= 0; i--){

    console.log(olya[i]);
  }
  

  // Loop inside a loop

  for(let exercise = 1; exercise <4; exercise++ ) {
    console.log(`--------Starting exercise ${exercise} `);


    for(let repetition = 1; repetition <6; repetition++) {
        console.log(`exercise ${exercise} Lifting weights repetition ${repetition}`);

    }
  }
  */

//   for(let repetition = 1; repetition <10; repetition++) {
//     console.log(`Lifting  weight repetitions ${repetition}`)}

  
/*
    let repetition = 1;
    while(repetition <= 10){

    // console.log(`Lifting  weight repetitions ${repetition}`);
    repetition++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while(dice != 6) {
    console.log(`You rolled a dice ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log(`Dice is about to end`);
    }
    */

    //FINAL CHALLENGE

    
    const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
    // tip value = 3.3 , 44.25, 26.4 , 66, 5.55, 15.75, 1.5, 165, 12.9, 7.8
    const tips = [];
    const totals = [];


    const calcTip = function(bill) {
        let tip;
    
        if(bill > 50 || bill < 300) {
            tip = bill * 0.15;
       }
       else{
            tip = bill * 0.20;
       }
       return tip;
    }

for(let i = 0; i < bills.length ; i++) {
    console.log(`        ------------- The bill amount is $ ${bills[i]}`);
    
    tips.push(calcTip(bills[i]));
    console.log(`The tip amount is ${tips[i]}`);

    let sum = 0;
    sum = bills[i] + tips[i];
    totals.push(sum);
    console.log(`The total to pay is $ ${sum} ----------------       `);
 
}





const calcAverage = function(arr) {

    let sum = 0;

    for(let i = 0; i < arr.length;i++) {
        // sum = sum + arr[i];   same as below
        sum += arr[i];
    }
    
    return sum / arr.length;
}



console.log(calcAverage([2,3,6]));

console.log(calcAverage(tips));
console.log(calcAverage(bills));
console.log(calcAverage(totals));









  
    
    
   
    
  
    
    





