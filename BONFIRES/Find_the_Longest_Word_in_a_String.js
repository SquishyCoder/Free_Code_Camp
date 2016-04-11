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
