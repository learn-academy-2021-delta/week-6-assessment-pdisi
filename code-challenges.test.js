// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

//Test Fails: Input is not defined.

describe("Input array and return sentence", () => {

  // a test/it method, nested within the describe block, that in plain words, describes what the function does.
  it("Takes in a an array of names and occupations then returns a sentence with the names capitalized", () => {

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(input(people)).toEqual((["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]))
    
  })
})

var people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]



// // // b) Create the function that makes the test pass.

// //Pretty sure I forgot how to code
// //I have to take an input of an array and manipulate a string that is contained by a variable
// //I will split the array so that I can map over it
// //Return the value located at the 0 index as uppercase
// //Slice the value at the index of 1
// //Join back together after value has been sliced
// //Create another variable to store the entire sentence
// //Create string interpolation for the entire sentence within a return statement
// //return the array with map method pushed to a return of the completed sentence


const input = (array) => {
  var nameCap = (string) => {
    return string.split(' ').map(value => {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }).join(' ') 
  }
  var complete = (object) => {
    return (`${nameCap(object.name)} is ${object.occupation}.`)
  }
  return array.map(value => {
    return complete(value)
  })
}

//Notes on process: I needed help on this one from classmates, but I believe that I understand the logic behind the steps within this function.

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

//Test Fail: Input is not defined.

describe("Take in an array and return an array", () => {

  // a test/it method, nested within the describe block, that in plain words, describes what the function does.
  it("Takes in an array and returns an array with only the remainders of the given numbers divided by 3", () => {

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(input([23, "Heyyyy!", 45, -10, 0, "Yo", false])).toEqual(([ 2, 0, -1, 0 ]))
    expect(input([5, "Hola", 43, -34, "greetings", true])).toEqual(([ 2, 1, -1 ]))
  })
})

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// // b) Create the function that makes the test pass.

// //Use input of an array as function
// //Filter the given array with typeof to remove unwanted values
// //Use map method to apply modulo across the values that are remaining
// //Return the remaining values

const input = (array) => {
 return array.filter.typeOf(1){
   return array.map
 }

}

//Notes on process: I am completely brain dead with syntax this week and can't find an example to follow. Ruby and career week were no good for the javascript mindset.


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

//Test Fail: Input is not defined.

describe("Take in an array and return a sum", () => {

  // a test/it method, nested within the describe block, that in plain words, describes what the function does.
  it("Takes in an array of numbers and returns the sum of all numbers cubed", () => {

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(input([2, 3, 4])).toEqual((99))
    expect(input([0, 5, 10])).toEqual((1125))
  })
})

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125



// b) Create the function that makes the test pass

//After some googling I found the math.pow method, so I will attempt to use that
//I will map over the array in order to use just the exponent in the Math.pow and replace the base with the given array
//I do not think I will get the Math.pow to work properly

// const input = (array) => {
//   input = input.map((n) => Math.pow(n, 3))
  
// }

//Attempting a simple for loop

const input = (array) => {
  let cubeArray = array
  for (let i = 0; i < array.length; i++){
    array[i] = array[i]*array[i]*array[i];
  }
  let sum = cubeArray
  for (let i = 0; i <cubeArray.length; i++){
    sum += array[i]
  }
  return sum
}

//Notes on process: First two digits of cubeAndSum1 are correct, but the third is coming out with something completely wrong. Demoralized and done for now. I will be putting more time into studying javascript again.