//Bonfire: Falsy Bouncer -- Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined and NaN.

function bouncer(arr) {
    var falsy = [false, null, 0, "", undefined, NaN]; //set falsy values to an array
    var y = arr.filter(function(x) { //filtering through arrays fed through bouncer function
        for(i = 0; i < falsy.length; i++) { //going through falsy array
            if(x !== falsy[i]) {
                return x;
            }
        }
    });
    return y;
}
bouncer([7, "ate", "", false, 9]); //should return [7, "ate", 9]
bouncer(["a", "b", "c"]); //should return ["a", "b", "c"]
bouncer([false, null, 0, NaN, undefined, ""]); //should return []
