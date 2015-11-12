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
titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
