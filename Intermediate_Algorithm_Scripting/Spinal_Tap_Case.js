// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var string = str.split("");
  var word = [];

  for (i=0; i < string.length; i++) {
    if (/[A-Z]/.test(string[i]) && i !== 0) {
      if (string[i-1] !== " " && string[i-1] !== "_") {
         word.push("-" + string[i]);
       } else {
          word.push(string[i]);
        }
    } else if (string[i] === " " || string[i] === "_") {
      word.push("-");
      } else {
        word.push(string[i]);
      }
  }

  return word.join("").toLowerCase();
}

spinalCase("This Is Spinal Tap"); // should return "this-is-spinal-tap"
spinalCase("thisIsSpinalTap"); // should return "this-is-spinal-tap"
spinalCase("The_Andy_Griffith_Show"); // should return "the-andy-griffith-show"
spinalCase("Teletubbies say Eh-oh"); // should return "teletubbies-say-eh-oh"
spinalCase("AllThe-small Things"); // should return "all-the-small-things"
