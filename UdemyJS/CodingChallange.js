/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.
Example: [17, 21, 23] will print "... 17°C in 1 days .
.. 21°C in 2 days ... 23°C in 3 days ….."
Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.
Use the problem-solving framework: Understand the problem and break it up into sub-problems!
TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1 Understanding the problem
//    --array transformed to string, sepereted by ... 
//    -- What is that X days Ansver: index + 1 

// 2 Breaking up into sub-problems
//    --Transform array into string 
//
let test1 = [17, 21, 23]

let test2 = [12, 5, -5, 0, 4]
function printForecast(temperatures) {
  let str =''; 
  for (i = 0; i <= temperatures.length - 1; i++) {
    str += `... ${temperatures[i]}°C in ${[i + 1]} days `
  }
  console.log(str)
}
printForecast(test2)
