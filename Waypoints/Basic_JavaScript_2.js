//Compound Assignments: will do the math on myVar while assigning to myVar
myVar += 5;
myVar -= 5;
myVar *= 5;
myVar /= 5;



//Escaping Quotes
var sampleStr = "Alan said, \"Peter is learning JavaScript\".";
/*
\'	single quote
\"	double quote
\\	backslash
\n	new line
\r	carriage return
\t	tab
\b	backspace
\f	form feed */



//String Immutability: string literal cannot be altered once created
var myStr = "Bob";
myStr[0] = "J"; // incorrect
var myStr = "Bob";
myStr = "Job"; // correct: must assign a new string

//Access Multi-Dimensional Arrays With Indexes
var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12], 13, 14]
];
arr[0]; // equals [1,2,3]
arr[1][2]; // equals 6
arr[3][0][1]; // equals 11



//Comparison Operators: Returns booleans
== // equality operator compares 2 values & returns true; can compare different data types
1 == 1    // true
1 == 2    // false
1 == '1'   // true
"3" == 3    // true

=== // strict equality compares 2 values; tests both data type & value
3 == 3    // true
"3" == 3    // false

!= // inequality operator compares 2 values & returns false; can compare different data types
1 != 2      // true
1 != "1"    // false
1 != '1'    // false
1 != true   // false
0 != false  // false

!== // strict inequality compares 2 values & returns false; tests both data type & value
3 !== 3   // false
3 !== '3' // true
4 !== 3   // true

> // greater than operator compares 2 values & returns true if left is greater than right; can compare different data types
5 > 3   // true
7 > '3' // true
2 > 3   // false
'1' > 9  // false

>= // greater than or equal to operator compares 2 values & returns true if left is greater than or equal right; can compare different data types
6  >=  6  // true
7  >= '3' // true
2  >=  3  // false
'7' >=  9  // false

< // less than operator compares 2 values & returns true if left is less than right; can compare different data types
2 < 5  // true
'3' < 7  // true
5 < 5  // false
3 < 2  // false
'8' < 4  // false

<= // less than or equal to operator compares 2 values & returns true if left is less than or equal to right; can compare different data types
4 <= 5  // true
'7' <= 7  // true
5 <= 5  // true
3 <= 2  // false
'8' <= 4  // false

&& // logical and operators compares more than 1 thing at a time & returns true if left and right are true
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";

|| // logical or operators compares more than 1 thing at a time & returns true if either left or right is true
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";



//Switch Statement: tests a value & have many case statements, which define different possible values. Executes from the first matched case until a break. **Tested with strict equality (===).
function caseInSwitch(val) {
  var answer = "";

  switch (val) {
    case 1:
      answer = "alpha";
    break;

    case 2:
      answer = "beta";
    break;

    case 3:
      answer = "gamma";
    break;

    case 4:
      answer = "delta";
    break;
  }
  return answer;
}

caseInSwitch(1);
caseInSwitch(2);
caseInSwitch(3);
caseInSwitch(4);

// default statement will execute if there are no matching cases
function switchOfStuff(val) {
  var answer = "";

  switch (val) {
    case "a":
      answer = "apple";
    break;

    case "b":
      answer = "bird";
    break;

    case "c":
      answer = "cat";
    break;

    default:
      answer = "stuff";
  }
  return answer;
}

switchOfStuff("a");
switchOfStuff("b");
switchOfStuff("c");
switchOfStuff("d");
switchOfStuff(4);

// multiple identical options: omit break for multiple inputs that have the same output
function sequentialSizes(val) {
  var answer = "";

  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
    break;

    case 4:
    case 5:
    case 6:
      answer = "Mid";
    break;

    case 7:
    case 8:
    case 9:
      answer = "High";
    break;
  }
  return answer;
}

sequentialSizes(1);
sequentialSizes(2);
sequentialSizes(3);
sequentialSizes(4);
sequentialSizes(5);
sequentialSizes(6);
sequentialSizes(7);
sequentialSizes(8);
sequentialSizes(9);



//Returning Boolean Values From Functions
// Anti-pattern using if/else to do comparison, then return true/false
function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
// same as:
function isEqual(a,b) {
  return a === b;
}



//Counting Cards
var count = 0;

function cc(card) {

  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
    break;

    case 7:
    case 8:
    case 9:
      count += 0;
    break;

    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
    break;
  }

  if (count > 0) {
    return String(count) + " Bet";
  } else {
  return String(count) + " Hold";
  }
}

cc(2); cc(3); cc(7); cc('K'); cc('A');



//Object Properties
//Dot Operator
var myObj = {
  prop1: "val1",
  prop2: "val2"
};

var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2

//Bracket Notation
var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock"
};

myObj["Space Name"]; // Kirk
myObj['More Space']; // Spock

//Variable & Bracket Notation
var myDog = "Hunter";
var dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
}
var breed = dogs[myDog]; // "Hunter"
console.log(breed); // "Doberman"

// Objects for Lookups
function phoneticLookup(val) {
  var result = "";

  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  result = lookup[val];

  return result;
}
