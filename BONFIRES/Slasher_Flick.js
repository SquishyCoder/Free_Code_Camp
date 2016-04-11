//Bonfire: Slasher Flick -- Return the remaining elements of an array after chopping off n elements from the head. The head meaning the beginning of the array or the zeroth index.

function slasher(arr, howMany) {
    var array = arr.splice(0, howMany); //splice(): changes the content of the array by removing existing elements and/or adding new elements
    return arr; //**splice returns an array containing the DELETED elements
}
slasher([1, 2, 3], 2); //should return [3]
slasher([1, 2, 3], 0); //should return [1, 2, 3]
slasher([1, 2, 3], 9); //should return []
slasher([1, 2, 3], 4); //should return []
