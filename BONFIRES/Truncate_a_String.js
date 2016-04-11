//Bonfire: Truncate a String -- Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a "..." ending. Note that the 3 dots at the end add to the string length. If the length of the string is less than or equal to 3 characters, then the length of the 3 dots is not added to the string length.

function truncate(str, num) {
    var dot = "...";
    if((str.length > num && 3) && num > 3) { //if string is greater than num & 3 & num is greater than 3
        var x = str.substr(0, (num-3)); //truncate at 3 less than num
        return x+=dot; //concatenate x and dot
    } else if (str.length > num && str.length < 3 || str.length > 3 && num < 3) { //if string is greater than num & less than 3 or string is greater than 3 & num is less than 3
        var a = str.substr(0, (num)); //truncate at num
        return a+=dot; //concatenate a and dot
     } else {
        return str;
    }
}
truncate("A-tisket a-tasket A green and yellow basket", 11); //should return "A-tisket..."
truncate("Peter Piper picked a peck of pickled peppers", 14); //should return "Peter Piper..."
truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length); //should return "A-tisket a-tasket A green and yellow basket"
truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2); //"A-tisket a-tasket A green and yellow basket"
truncate("A-", 1); //should return "A..."
truncate("Absolutely Longer", 2); //should return "Ab..."
