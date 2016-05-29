// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  var newArr = [];
  var array;

  if (arr1.length > arr2.length || arr1.length == arr2.length) {
      array = arr1;
  } else {
      array = arr2;
  }

  for (var i = 0; i < array.length; i++) {
    var idx = arr2.indexOf(arr1[i]);
    var idx1 = arr1.indexOf(arr2[i]);

    if (idx == -1 && arr1[i] !== undefined) {
        newArr.push(arr1[i]);
    }

    if (idx1 == -1 && arr2[i] !== undefined) {
        newArr.push(arr2[i]);
    }
  }

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // should return [4]
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]); // should return ["pink wool"]
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]); // should return ["diorite", "pink wool"]
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]); // should return ["piglet", 4]
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]); // ["snuffleupagus", "cookie monster", "elmo"]
diffArray([1, "calf", 3, "piglet"], [7, "filly"]); // should return [1, "calf", 3, "piglet", 7, "filly"]
