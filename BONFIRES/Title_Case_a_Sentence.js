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
