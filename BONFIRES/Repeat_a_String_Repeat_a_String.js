//Bonfire: Repeat a String Repeat a String -- Repeat a give string (first argument) n times (second argument). Return an empty string if n is a negative number.

function repeat(str, num) {
    var string = String(""); //assigning an empty string to a variable
    if (num > 0) {
        var nString = str.repeat(num); //.repeat: returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
        return nString;
    } else {
    return string;
    }
}
repeat("*", 3); //should return "***"
repeat("abc", 3); // should return "abcabcabc"
repeat("abc", 4); //should return "abcabcabcabc"
repeat("abc", 1); //should return "abc"
repeat("*", 8); //should return "********"
repeat("abc", -2); //should return ""
