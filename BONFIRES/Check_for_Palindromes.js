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
palindrome("eye"); //should return true.
palindrome("race car"); //should return true.
palindrome("not a palindrome"); //should return false.
palindrome("A man, a plan, a canal. Panama"); //should return true.
palindrome("never odd or even"); //should return true.
palindrome("nope"); //should return false.
palindrome("almostomla"); //should return false.
palindrome("My age is 0, 0 si ega ym."); //should return true.
palindrome("1 eye for of 1 eye."); //should return false.
palindrome("0_0 (: /-\ :) 0-0"); //should return true.
