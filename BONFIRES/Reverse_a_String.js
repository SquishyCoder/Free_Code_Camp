//Bonfire: Reverse a string -- Reverse the provided string. You may need to turn the string into an array before you can reverse it. Your result must be a string.
//reverseString() should return a string.

function reverseString(str) {
    var array = str.split("").reverse().join("");
    return String(array); //String: global object for strings or a sequence of characters and can be applied directly
}
reverseString("hello"); //reverseString("hello") should become "olleh".
reverseString("Howdy"); //reverseString("Howdy") should become "ydwoH".
reverseString("Greetings from Earth"); //reverseString("Greetings from Earth") should return "htraE morf sgniteerG".
