// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

function translatePigLatin(str) {
   var vowels = ["a", "e", "i", "o", "u"];
   var array = str.split("");
   var pig = [];
   var letters;

   for (i = 0; i < array.length; i++) {
       if (vowels.indexOf(array[i]) < 0) {
           pig.push(array[i]);
       } else if (vowels.indexOf(array[i]) >= 0 && i !== 0) {
           letters = array.slice(i);
           pig.push("ay");
           break;
       } else {
           array.push("way");
           break;
       }
   }

   if (pig.length > 0) {
       for (n = letters.length-1; n >= 0; n--) {
           pig.unshift(letters[n]);
       }
       return pig.join("");
   } else {
       return array.join("");
   }
}

translatePigLatin("consonant"); // should return "onsonantcay"
translatePigLatin("california"); // should return "aliforniacay"
translatePigLatin("paragraphs"); // should return "aragraphspay"
translatePigLatin("glove"); // should return "oveglay"
translatePigLatin("algorithm"); // should return "algorithmway"
translatePigLatin("eight"); // should return "eightway"
