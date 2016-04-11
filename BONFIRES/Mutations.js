//Bonfire: Mutations -- Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function mutation(arr) {
    for (i=0; i < arr[1].length; i++) {
        var pos = arr[0].toLowerCase().indexOf(arr[1].toLowerCase().charAt(i)); //indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
        if (pos == -1) {
            return false;
            break; //only looking for at least one false
        }
    } return true;
}
mutation(["hello", "hey"]); //should return false
mutation(["hello", "Hello"]); //should return true
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); //should return true
mutation(["Mary", "Army"]); //should return true
mutation(["Mary", "Aarmy"]); //should return true
mutation(["Alien", "line"]); //should return true
mutation(["floor", "for"]); //should return true
mutation(["hello", "neo"]); //should return false
