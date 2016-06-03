// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  var string = [];
  var letter;

  for (i = 0; i < str.length; i++) {
    string.push(str.charCodeAt(i));
  }

  for (n = 0; n < string.length; n++) {
    if (string[n+1] !== string[n] + 1 && n !== string.length - 1) {
      letter = String.fromCharCode(string[n] + 1);
      return letter;
    } else if (n === string.length - 1) {
      return undefined;
    } else {
      continue;
    }
  }
}

fearNotLetter("abce"); // should return "d"
fearNotLetter("abcdefghjklmno"); // should return "i"
fearNotLetter("bcd"); // should return undefined
fearNotLetter("yz"); // should return undefined.
