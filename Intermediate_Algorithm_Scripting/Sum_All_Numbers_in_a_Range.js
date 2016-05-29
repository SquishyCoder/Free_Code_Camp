// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them. The lowest number will not always come first.

function sumAll(num) {
    var n = 0;
    var small = Math.min.apply(null, num);
    // Math.min: returns the smallest of 0 or more numbers
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min

    var large = Math.max.apply(null, num);
    // Math.max: returns the largest of 0 or more numbers
    // function.prototype.apply(): calls a function with a given value & arguments provided as an array (or an array-like object). In this case, finds the min/max number in array.

   for (var i = small; i <= large; i++) {
        n+=i;
        }
     return n;
}

sumAll([1, 4]); // should return 10
sumAll([4, 1]); // should return 10
sumAll([5, 10]); // should return 45
sumAll([10, 5]); // should return 45
