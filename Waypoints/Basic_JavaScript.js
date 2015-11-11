var ourArray = [1,2,3];
var ourData = ourArray[0]; // equals 1: targets array data using indexes

var thisArray = [1,2,3];
thisArray[1] = 3; // ourArray now equals [1,3,3]: changes specific data in array

var myArray = [1,2,3];
var removedFromMyArray = ourArray.pop(); // removedFromOurArray now equals 3, and ourArray now equals [1,2]: takes out the data from the END of an array -- works for any data structure

var myArrayOne = ["Stimpson", "J", ["cat"]];
removedFromMyArrayOne = ourArray.shift(); // removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]]: takes of the data from the START of an array

var oneArray = ["Stimpson", "J", ["cat"]];
oneArray.pop(); // ourArray now equals ["Stimpson", "J"]
oneArray.push(["happy", "joy"]); // ourArray now equals ["Stimpson", "J", ["happy", "joy"]]: adds data to the END of an array

var twoArray = ["Stimpson", "J", ["cat"]];
twoArray.shift(); // ourArray now equals ["J", ["cat"]]
twoArray.unshift("happy"); // ourArray now equals ["happy", "J", ["cat"]]: adds data to the START of an array

var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}; // this is an Object -- stores data in a structured way and can represent real world objects. Data in objects are called through properties.

ourDog.name = "Happy Camper"; // updates a property of an object.

var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark; //deleting bark property

var ourArray = [];
for(var i = 10; i > 0; i -= 2){ // iterates even numbers backwards from 10
  ourArray.push(i);
}

var ourMin = 1;
var ourMax = 9;
function ourFunction() {
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
} // returns a random whole number between 1 and 9. Also read as returns a random numner that's greater than/equal to ourMin and less than or equal to ourMax.
// Math.random generates a decimal; Math.floor rounds down to the nearest whole number.

var test = (function() {
  var testString = "Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.";
  var expressionToGetSoftware = /software/gi;
  var expression = /and/gi; //g (global match): searches entire string for the pattern inside the slashes instead of first match. i: ignore cases in string.
  return testString.match(expression).length;
})();(function(){return test;})();
//Regular expressions: looking for patterns within strings.

var test = (function() {
  var testString = "There are 3 cats but 4 dogs.";
  var expression = /\d+/g; //d: digit selector for strings. +: takes the whole number/word in a string. Without it will select individual characters/digits.
  return testString.match(expression).length;
})();(function(){return test;})();
// \s: whitespace; \r: the carriage return; \n: newline; \t: tab; \f: the form feed -- uppercase versions are the inverse i.e. \S: not whitespace
