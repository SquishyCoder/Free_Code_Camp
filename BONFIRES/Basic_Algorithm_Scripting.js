//Bonfire: Reverse a string -- Reverse the provided string. You may need to turn the string into an array before you can reverse it. Your result must be a string.
//reverseString() should return a string.
function reverseString(str) {
    var array = str.split("").reverse().join("");
    return String(array); //String: global object for strings or a sequence of characters and can be applied directly
}
reverseString("hello"); //reverseString("hello") should become "olleh".
reverseString("Howdy"); //reverseString("Howdy") should become "ydwoH".
reverseString("Greetings from Earth"); //reverseString("Greetings from Earth") should return "htraE morf sgniteerG".


//Bonfire: Factorialize a Number -- Return the factorial of the provided integer. If the integer is represented with the letter 'n', a factorial is the product of all positive integers less than or equal to 'n'. i.e. 5! = 1*2*3*4*5 = 120
//factorialize() should return a number.
function factorialize(num) {
    var n = 1;
       for(var i = 1; i <= num; i++) {
       n *= i; // n = n * i: continues to update the value of "n" as it cycles through the loop
    } return n;
}
factorialize(5); //factorialize(5) should return 120.
factorialize(10); //factorialize(10) should return 3628800.
factorialize(20); //factorialize(10) should return 3628800.
factorialize(0); //factorialize(0) should return 1.


//Bonfire: Check for Palindromes -- Return 'true' if the given string is a palindrome, otherwise false.
function palindrome(str) {
    str = str.replace(/\W|_|\s/g, "").toLowerCase().split(""); //.replace: replaces a match with the indicated replacement in a string. In this case, it is replacing all non-alphanumeric characters (\W), whitespace (\s) & underscore(|_) with no spacing.
    var pArray1 = str.join("");
    var pArray2 = str.reverse().join("");
    if(pArray1 === pArray2) {
  return true;
} else {
    return false;
    }
}
return palindrome("eye"); //should return true.
return palindrome("race car"); //should return true.
return palindrome("not a palindrome"); //should return false.
return palindrome("A man, a plan, a canal. Panama"); //should return true.
return palindrome("never odd or even"); //should return true.
return palindrome("nope"); //should return false.
return palindrome("almostomla"); //should return false.
return palindrome("My age is 0, 0 si ega ym."); //should return true.
return palindrome("1 eye for of 1 eye."); //should return false.
return palindrome("0_0 (: /-\ :) 0-0"); //should return true.


//Bonfire: Find the Longest Word in a String -- Return the length of the Longest word in the provided sentence. Your response should be a number.
function findLongestWord(str) {
    var lWord = str.split(" "); //turns string into an array divided by the spaces.
    lWord.sort(function(a, b) {
        return (b.length - a.length); //sorting the array by the length of each string from largest to smallest.
    });
    return (lWord[0].length); //returns the length of the string at index 0, which should be the longest.
}
findLongestWord("The quick brown fox jumped over the lazy dog"); //should return 6.
findLongestWord("May the force be with you"); //should return 5.
findLongestWord("Google do a barrel roll"); //should return 6.
findLongestWord("What is the average airspeed velocity of an unladen swallow"); //should return 8.
findLongestWord("What if we try a super-long word such as otorhinolaryngology"); //should return 19.


//Bonfire: Title Case a Sentence -- Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is lower case. For the purpose of this exercise, you should also capitalize connecting words like "the" and "of."
function titleCase(str) {
    str = str.toLowerCase().split(" "); //setting string to lower case then making it an array
        var string = str.map(function(val){ //iterates through the array while creating new values based on the function & creating a new array
            val = val.charAt(0).toUpperCase() + val.slice(1); //charAt: selects index of a string, slice: cuts a string at the indicated index
            return val;
            });
        var string1 = string.join(" "); //taking new array & putting it back as a string
    return (string1);
}
titleCase("I'm a little tea pot"); //should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt"); //should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); //should return "Here Is My Handle Here Is My Spout".


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


//Bonfire: Confirm the Ending -- Check if string (first argument) ends with the given target string (second argument).
function end(str, target) {
    var x = str.substr(-(target.length), target.length); //str.subtr(start, length): returns characters in a string beginning at the specified location (start) through the specified number of characters (length). Negative start begins at the end of the string. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
    if(x === target) {
        return true;
    } else {
        return false;
    }
}
end("Bastian", "n"); //should return true.
end("Connor", "n"); //should return false.
end("Walking on water and developing software from a specification are easy if both are frozen", "specification"); //should return false.
end("He has to give me a new name", "name"); //should return true.
end("He has to give me a new name", "me"); //should return true.
end("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"); //should return false.


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


//Bonfire: Truncate a String -- Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a "..." ending. Note that the 3 dots at the end add to the string length. If the length of the string is less than or equal to 3 characters, then the length of the 3 dots is not added to the string length. **WILL LIKELY REVISIT
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
