// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// Problem: we work for a company buildoing a smart home thermometer.
//Task: "given an array of temp. of one day, calc the temp amplitude.
//keep in mind that sometimes there might be sensor error."
// const temperatures = [3, 5, 1];
// const temperatures1 = [9, 4, 5];

//1)understand the problem
// - what's temp amplitude? Answ: difference between highest and lowes temp.
// - How to compute the max and min temp?
//- what is the sensor and what to do when it occurs

//2)Breaking into sub problems
//- how to ignore errors
//- find max value in temp array
//- find min value in temp array
//-subtract min from max(amplitude) and return itcalc
/*
const measureKelvin = function () {
  const measurment = {
    type: "temp",
    unit: "celsius",
    value: 10,
  };
  console.log(measurment);

  const kelvin = measurment.value + 273;
  return kelvin;
};
measureKelvin();

//using debugger

const calcTempAmplitude = function (temps) {
  let max = 0;
  let min = 0;

  for (let i = 0; i < temperatures.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== "number") continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

const tempCombined = temperatures.concat(temperatures1);

console.log(tempCombined);
*/

const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];
const days = [];

const printForecast = function (arr) {
  let i = 0;
  for (i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    let day = 0;
    for (day = 0; day < arr.length; day++) {
      if (day === i) {
        days.push(day + 1);
        console.log(`...${arr[i]} C in ${days[day]} days...`);
      }
      // console.log(days);
    }
  }
};

printForecast(temp1);
printForecast(temp2);

// (` ...${arr[i]} in  ${day[i]} days`);
