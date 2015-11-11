var Car = function() {
 // this is a private variable
  var gear = 1;
 // this is a private function (also known as a private method)
  function addStyle(styleMe){
    return 'The Current Gear Is: ' + styleMe;
  }
 // this is a public method noted by the "this." notation
  this.getGear = function() {
    return addStyle(this.gear);
  };
};

var Car = function() {
   this.wheels = 4;
}; //original object with method that is repeated in the instance below
var myCar = new Car(); //instance: inherits all the properties & methods of original object
myCar.engines = 1; //creating an instance of an object with a constructor function

var Car = function(wheels, seats, engines) { //using parameters on constructors in order to create a different object.
  this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
};
var myCar = new Car(3, 4, 1); //evaluates to wheels: 3, seats: 4, engines: 1

var oldArray = [1,2,3,4,5];
//.map: will iterate through every element in an array & will create a new array with the new values created by the callback function and returns it
var newArray = oldArray;
var newArray = oldArray.map(function(val) {
  return val + 3; //adds 3 to each element in oldArray to create new values in newArray
});

var array = [4,5,6,7,8];
//.reduce: iterates through the array to condense elements into one value
var singleVal = array;
var singleVal = array.reduce(function(previousVal, currentVal) { //when using .reduce, pass in a callback where the arguments are an accumulator & current value
  return previousVal + currentVal;
}, 0); //this is the 2nd argument of .reduce that sets the value of the accumulator. *If no value is established, the value will be the first element of the array & currentVal will take value of the second array element

var oldArray = [1,2,3,4,5,6,7,8,9,10];
//.filter: iterates through an array & filters out elements that return false in the callback function below
var newArray = oldArray;
var newArray = oldArray.filter(function(val) {
  return val <= 5; //filters out all elements that are greater than 5
});

var array = [1, 12, 21, 2];
//.sort: sorts values in array alphabetically/numerically. Sorts the original array instead of creating a new one & returns this array
array.sort(function(a, b) { //*Can be passed a compare function as a callback. If no compare function is passed, it will convert values to strings and sort alphabetically
  return b - a; //sorts array from largest to smallest
});

var array = [1,2,3,4,5,6,7];
array.reverse(); //reverses the elements in an array. Reverse the original array instead of creating a new one & returns this array

var oldArray = [1,2,3];
var concatMe = [4,5,6];
var newArray = oldArray;
var newArray = oldArray.concat(concatMe); //.concat: concatenates or merges arrays. concatMe is concatenated onto oldArray

var string = "Split me into an array";
var array = string.split(' '); //.split: splits a string into an array. The argument determines the points in the string where the split occurs -- here it is at the spaces

var joinMe = ["Split","me","into","an","array"];
var joinedString = joinMe.join(" "); //.join: combines the elements of an array into a string separated by the argument indicated
