// A1

/*
const country = 'New Zealand' ; 
const continent = 'Island' ;
let population = 6000000;

const isIsland = false;
const language = 'english' ;

console.log(`I live in ${country} which is located on ${continent}. 
The population of the country is ${population} mln. people.`);

console.log(` ${typeof continent},${typeof population}, ${typeof isIsland},${typeof language}`);


let halfPopulation = population / 2;
population = population + 1;

console.log(halfPopulation);
console.log(population);

let finlandPopulation = 6000000;
if(population < finlandPopulation) {

    console.log(`Population of ${country} is lower than Finland population`)
}
else if(population > finlandPopulation){

    console.log(`Population of ${country} is higher than Finland population`)
}
else{
    console.log(`Population of ${country} and Finland is equal`)
}


let averagePopulation = 33000000; if(averagePopulation > population ? 
    console.log(`Population of ${country} is lower than average population`) : 
     console.log(`Population of ${country} is higher than average population`));

     let description = console.log( `${country} country is ${isIsland ? "an" : "not an"} island
      , and its ${population} million people speak ${language}`);


      // 4, 617, 23, false, 1143.

     let num =  '9' - '5';
     let num1 = '19' - '13' + '17';
     let num2 =  '19' - '13' + 17;
     let num3 = '123' < 57;
     let num4 = 5 + 6 + '4' + 9 - 4 - 2; // 5+6=11 +'4' = '114' + (9 - 4 - 2) = 1143
     console.log(num, num1,  num2, num3, num4);



     // A2 

     

     let numNeighbors = prompt(`How many neighbours your country has?`);
     numNeighbors = Number(numNeighbors);

     if(numNeighbors === 1){
        console.log(`only one border!`)
     }
     else if(numNeighbors > 1){
        console.log(`More than one border!`)
     }
     else{console.log(`no borders!`)}
     





 // Let'ssaySarahislookingforanewcountrytolivein.Shewantstoliveina
// country that speaks english, has less than 50 million people and is not an
// island.

if(language === 'english' && population < 50000000 && isIsland != true ){

    console.log(`This country fits you`);
}
else{
    console.log(`this country not for you`);
}


// A3 switch statement

// Use a switch statement tolog the followingstring for the given'language': chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :D'


switch(language) {
    case 'chinese':
    console.log(`MOST number of native speakers!`);
      break;
    case 'spanish':
    console.log(`2nd place in number of native speakers`);
      break;
    case 'english': 
    console.log(`3rd place`);
      break;
    case 'hindi':
     console.log(`4th place`);
       
  }
  */



  //PART 2

  /*
  //A1
  //Writeafunctioncalled'describeCountry'whichtakesthreeparameters: 'country', 
  //'population' and 'capitalCity'. Based on this input, the function returns 
  //a string with this format: 
  //'Finland has 6 million people and its capital city is Helsinki'
  const country1 = 'New Zealand' ;
  const country2 = 'Australia' ;
  const country3 = 'France' ;
  let population1 = 600;
  let population2 = 1400;
  let population3 = 900;
  let population4 = 1222;

  const capitalCity1 = 'Wellington';
  const capitalCity2 = 'Canberra';
  const capitalCity3 = 'Paris';


  const describeCountry = function(country, population, capitalCity) {

    let description = console.log(`${country} has ${population} millions people and its capital city is ${capitalCity}. `);
    return description;
  }
  console.log(describeCountry(country1,population1,capitalCity1));
  console.log(describeCountry(country2,population2,capitalCity2));
  console.log(describeCountry(country3,population3,capitalCity3));


  //Callthisfunction3times,withinputdatafor3differentcountries.Storethe returned values 
  //in 3 different variables, and log them to the console


//A2

// //The world population is 7900 million people.Createa function declaration called 'percentageOfWorld1' 
//which receives a 'population' value, 
// and returns the percentage of the world population that the given population represents.
// For example, China has 1441 million people,
//  so it's about 18.2% of the world population
  
let worldPopulation = 7900;

const percentageOfWorld1 = function (population) {

    const percentage = (Number(population) / worldPopulation) * 100;
    return percentage;

}
console.log(percentageOfWorld1(population1));
console.log(percentageOfWorld1(population2));
console.log(percentageOfWorld1(population3));

//Createafunctionexpressionwhichdoestheexactsamething,called 'percentageOfWorld2',
// and also call it with 3 country populations (can be the same populations)

const percentageOfWorld2 = function (population) {

    const percentage = (Number(population) / worldPopulation) * 100;
    return percentage;

}
console.log(percentageOfWorld2(population1));
console.log(percentageOfWorld2(population2));
console.log(percentageOfWorld2(population3));

//Recreatethelastassignment,butthistimecreateanarrowfunctioncalled
//'percentageOfWorld3' let myFunction = (a, b) => a * b;

const percentageOfWorld3 = (population) => { 
    
   let percent = (Number(population)/ worldPopulation) * 100;
    return percent;
}

console.log(percentageOfWorld3(1441)); // must be 28.2 percent




//Createafunctioncalled'describePopulation'.
// This function takes in two arguments: 'country' and 'population', and returns a string 
//like this: 'China has 1441 million people, which is about 18.2% of the world.'

const describePopulation = function(country, population) {

    let description = console.log(`${country} has ${population} millions people
    which is about ${percentageOfWorld3(population)} % of the world. `);
    return description;

}

console.log(describePopulation(country2, population2));
console.log(describePopulation(country1, population1));
console.log(describePopulation(country3, population3));


//ARRAYS A3

//Createanarraycontaining4populationvaluesof4countriesofyourchoice. 

//Store this array into a variable called 'populations'


//population of NZ, Au, France, random
let populations = [600 ,1400, 900, 1222];

//Logtotheconsolewhetherthearrayhas4elementsornot(trueorfalse)

if(populations.length == 4 ? console.log(true) : console.log(false));

//Createanarraycalled'percentages'containingthepercentagesofthe
//world population for these 4 population values. 
//Use the function 'percentageOfWorld1' that you created earlier to compute 
//the 4 percentage values
let percentages = [(percentageOfWorld1(600)), (percentageOfWorld1(1400)),
    (percentageOfWorld1(900)),(percentageOfWorld1(1222)) ];

console.log(percentages);

// Createanarraycontainingalltheneighbouringcountriesofacountryofyour choice. 
// Choose a country which has at least 2 or 3 neighbours.
// Store the array into a variable called 'neighbours'

const neighbours = ['Germany', 'Poland', 'Greece'];
neighbours.push('Utophia');
console.log(neighbours);
neighbours.pop(neighbours.length-1);
console.log(neighbours);
 

//Ifthe'neighbours'arraydoesnotincludethecountry‘Germany’,
//logtothe console: 'Probably not a central European country :D'

if (neighbours.includes('Germany') ? console.log('This is central europe') : 
console.log('This is  not central europe'));

//Changethenameofoneofyourneighbouringcountries

neighbours [1] = 'Turkey';
console.log(neighbours);


   

//OBJECTS A4

//Createanobjectcalled'myCountry'foracountryofyourchoice,containing properties 'country',
// 'capital', 'language', 'population' and 'neighbours' (an array like we used in previous assignments)


const mycountry = {
    country: 'New Zealand',
    capital: 'Wellington',
    language: 'English',
    population: 1244,
    neighbours: ['Australia' , 'Papua'],
    describe: function() {
        console.log(`${this.country} has ${this.population} 
million ${this.language} - speaking people, ${this.neighbours.length} neighbours 
and a capital called ${this.capital}.`)},

    checkCountry: function() {

        let isIsland;
         if (this.neighbours.length >= 1 ? this.isIsland = false : this.isIsland = true);
        
       return isIsland;
  
    }
   
};
mycountry.describe();
mycountry.checkCountry(mycountry.neighbours.length);
console.log(mycountry);




//logastringlikethistothe console: 'Finland has 6 million finnish-speaking people, 
//3 neighbouring countries and a capital called Helsinki.'


// console.log(`${mycountry.country} has ${mycountry.population} 
// million ${mycountry.language} - speaking people, ${mycountry.neighbours.length} neighbours 
// and a capital called ${mycountry.capital}`);


//Increasethecountry'spopulationbytwomillionusingdotnotation,
//andthen decrease it by two million using brackets notation.

mycountry.population = mycountry.population + 1; //dot notation
mycountry['population'] = mycountry['population'] - 1; //brakets notation
// console.log(mycountry.population);


//Addamethodcalled'describe'tothe'myCountry'object.Thismethod will log a string to the console,
// similar to the string logged in the previous assignment, but this time using the 'this' keyword.


//Addamethodcalled'checkIsland'tothe'myCountry'object.This
//method will set a new property on the object, called 'isIsland'.
// 'isIsland' will be true if there are no neighbouring countries, and false if there are.
// Use the ternary operator to set the property.



// FOR LOOP A5


// Use a for loop to simulate the 50 people voting, by logging a string 
//like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'

/*
let voting;

for(i=1; i <= 50; i++) {

    console.log(`Voter number ${i} is currently voting`);
}
*/




// A6

let populations = [600, 1400, 900, 1222];
 percentages = [];


let worldPopulation = 7900;

const percentageOfWorld1 = function () {

    for(i=0; i < populations.length; i++) {

    const percent = (Number(populations[i]) / worldPopulation) * 100;
    percentages.push(percent);


    }
}
console.log(percentageOfWorld1());
console.log(populations, percentages);

const percentages3 = [];
let i = 0;
while (i < populations.length) {
const perc = percentageOfWorld1(populations[i]); percentages3.push(perc);
i++;
}
console.log(percentages3);  //should work

//Use a for loop to compute an array called 'percentages2' containing the
// percentages of the world population for the 4 population values. Use the
// function 'percentageOfWorld1' that you created earlier



// A6

//Storethisarrayofarraysintoavariablecalled'listOfNeighbours'
// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

let listOfNeighbours = [
    ['Canada', 'Mexico'], ['Spain'], ['Sweden', 'Russia']
];
for (let i = 0; i < listOfNeighbours.length; i++)
for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);




