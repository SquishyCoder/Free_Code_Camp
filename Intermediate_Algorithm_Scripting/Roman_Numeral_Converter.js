// Convert the given number into a roman numeral. All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
  var numerals = [];
  var n = num;

  while (n > 0) {
    if (n - 1000 >= 0) {
        numerals.push("M");
        n-=1000;
        continue;
    } else if (n - 900 >= 0) {
        numerals.push("CM");
        n-=900;
        continue;
    } else if (n - 500 >= 0) {
        numerals.push("D");
        n-=500;
        continue;
    } else if (n - 400 >= 0) {
        numerals.push("CD");
        n-=400;
        continue;
    } else if (n - 100 >= 0) {
        numerals.push("C");
        n-=100;
        continue;
    } else if (n - 90 >= 0) {
        numerals.push("XC");
        n-=90;
        continue;
    } else if (n - 50 >= 0) {
        numerals.push("L");
        n-=50;
        continue;
    } else if (n - 40 >= 0) {
        numerals.push("XL");
        n-=40;
        continue;
    } else if (n - 10 >= 0) {
        numerals.push("X");
        n-=10;
        continue;
    } else if (n >= 9) {
        numerals.push("IX");
        n-=9;
        continue;
    } else if (n - 5 >= 0) {
        numerals.push("V");
        n-=5;
        continue;
    } else if (n >= 4) {
        numerals.push("IV");
        n-=4;
        continue;
    } else if (n - 1 >= 0) {
        numerals.push("I");
        n-=1;
        continue;
    } else {
        break;
    }
  }

  return numerals.join("");

}

convertToRoman(36); // should return "XXXVI"
convertToRoman(2); // should return "II"
convertToRoman(3); // should return "III"
convertToRoman(4); // should return "IV"
convertToRoman(5); // should return "V"
convertToRoman(9); // should return "IX"
convertToRoman(12); // should return "XII"
convertToRoman(16); // should return "XVI"
convertToRoman(29); // should return "XXIX"
convertToRoman(44); // should return "XLIV"
convertToRoman(45); // should return "XLV"
convertToRoman(68); // should return "LXVIII"
convertToRoman(83); // should return "LXXXIII"
convertToRoman(97); // should return "XCVII"
convertToRoman(99); // should return "XCIX"
convertToRoman(500); // should return "D"
convertToRoman(501); // should return "DI"
convertToRoman(649); // should return "DCXLIX"
convertToRoman(798); // should return "DCCXCVIII"
convertToRoman(891); // should return "DCCCXCI"
convertToRoman(1000); // should return "M"
convertToRoman(1004); // should return "MIV"
convertToRoman(1006); // should return "MVI"
convertToRoman(1023); // should return "MXXIII"
convertToRoman(2014); // should return "MMXIV"
convertToRoman(3999); // should return "MMMCMXCIX"
