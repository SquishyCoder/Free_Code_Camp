//Bonfire: Seek and Destroy -- You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
    var array = arguments[0];
    var compare = [];
    for(i=1; i < arguments.length; i++) {
        compare.push(arguments[i]);
    }
    Array.prototype.diff = function(a) { //get the difference between multiple arrays. Compares all values and returns array with the values that do not repeat.
      return this.filter(function(i) { //http://stackoverflow.com/questions/1187518/javascript-array-difference
        return a.indexOf(i) < 0;
      });
    };
    var z = array.diff(compare);
    return z;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3); //should return [1, 1]
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); //should return [1, 5, 1]
destroyer([3, 5, 1, 2, 2], 2, 3, 5); //should return [1]
destroyer([2, 3, 2, 3], 2, 3); //should return []
destroyer(["tree", "hamburger", 53], "tree", 53); //should return ["hamburger"]
