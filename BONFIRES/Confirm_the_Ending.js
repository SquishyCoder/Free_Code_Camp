//Bonfire: Confirm the Ending -- Check if string (first argument) ends with the given target string (second argument).

function end(str, target) {
    var x = str.substr(-(target.length), target.length); //str.subtr(start, length): returns characters in a string beginning at the specified location (start) through the specified number of characters (length). Negative start begins at the end of the string. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
    if(x === target) {
        return true;
    } else {
        return false;
    }
}
end("Bastian", "n"); //should return true.
end("Connor", "n"); //should return false.
end("Walking on water and developing software from a specification are easy if both are frozen", "specification"); //should return false.
end("He has to give me a new name", "name"); //should return true.
end("He has to give me a new name", "me"); //should return true.
end("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"); //should return false.
