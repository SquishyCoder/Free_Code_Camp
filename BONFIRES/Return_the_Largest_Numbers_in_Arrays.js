//Bonfire: Return Largest Numbers in Arrays -- Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays. largestOfFour() should return an array.

function largestOfFour(arr) {
    var array = arr.map(function(val) { //iterates through an array and alters each element based on the function.
        var value = val.sort(function(a, b) { //sorts each element within the sub-arrays from largest to smallest.
            return b - a;
            });
        var value1 = value.filter(function(largest) {
                return largest === value[0]; //filters out all numbers except for those indexed at 0, which should be the largest number from each sub-array.
        });
        return value1; //at this stage, each value is now its own array.
    });
    var array1 = array.join(" ").split(" ").map(function(x) { //first joins all values as a string, then splits them into an array i.e. ["5", "27", "39", "1001" ].
       return Number(x); //iterating through this new array and making each element a number instead of a string.
   });
   return array1; //return the new array with the appropriate number values.
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); //should return [5, 27, 39, 1001]
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]); //should return [27,5,39,1001]
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]); //should return [9, 35, 97, 1000000]
