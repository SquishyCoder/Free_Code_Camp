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
return palindrome("eye");
return palindrome("race car");
return palindrome("not a palindrome");
return palindrome("A man, a plan, a canal. Panama");
return palindrome("never odd or even");
return palindrome("nope");
return palindrome("almostomla");
return palindrome("My age is 0, 0 si ega ym.");
return palindrome("1 eye for of 1 eye.");
return palindrome("0_0 (: /-\ :) 0-0");
