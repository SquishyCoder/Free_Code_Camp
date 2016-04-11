//Bonfire: Chunky Monkey -- Write a function that splits an array (first argument) into groups the length of size (second argument) & returns them as a multi-dimensional array.

//First Solution
function chunk (arr, size) {
  var array = [];
  for (i=0; i < arr.length) {
    array.push(arr.slice(i, i += size)); //Array Slice (x, y): x = start argument; y = end argument, *but does not include the variable.
  }
  return array;
}
chunk(["a", "b", "c", "d"], 2); //should return [["a", "b"], ["c", "d"]]
chunk([0, 1, 2, 3, 4, 5], 3); //should return [[0, 1, 2], [3, 4, 5]]
chunk([0, 1, 2, 3, 4, 5], 2); //should return [[0, 1], [2, 3], [4, 5]]
chunk([0, 1, 2, 3, 4, 5], 4); //should return [[0, 1, 2, 3], [4, 5]]

//Second Solution
function chunk (arr, size) {
  var array = [];
      i = 0;
      n = arr.length;
  while (i < n) {
    array.push(arr.slice(i, i += size));
  }
  return array;
}
chunk(["a", "b", "c", "d"], 2);
chunk([0, 1, 2, 3, 4, 5], 3);
chunk([0, 1, 2, 3, 4, 5], 2);
chunk([0, 1, 2, 3, 4, 5], 4);
