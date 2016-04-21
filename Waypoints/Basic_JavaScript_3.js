//Testing Objects for Properties
//.hasOwnProperty(propname): determine if the object has the property; returns a boolean
var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");    // true
myObj.hasOwnProperty("middle"); // false



//JSON (JavaScript Object Notation): format of JS to store data. Allows for data structures of various types -- strings, numbers, booleans, arrays & objects
var ourMusic = [
  {
    "artist": "Daft Punk", //metadata: information about other data
    "title": "Homework",
    "release_year": 1997,
    "formats": [ //nested formats array
      "CD",
      "Cassette",
      "LP" ],
    "gold": true
  },

  {
    "artist": "The Corrs",
    "title": "In Blue",
    "release_year": 2000,
    "formats": [
      "CD",
      "Cassette",
      "DVD" ],
    "gold": true
  }
];

// Accessing Nested JSON Objects: dot or bracket notation
var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": {
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
}
ourStorage.cabinet["top drawer"].folder2;  // "secrets"; bracket for properties with a space in their name
ourStorage.desk.drawer; // "stapler"

// Accessing Nested Arrays in JSON: dot or bracket notation
var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"

// Record Collection: Write a function which takes an id, a property (prop), and a value. For the given id in collection:
// If value is non-blank (value !== "") and prop is not "tracks" then update or set the value for the prop.
// If the prop is "tracks" and value is non-blank, push the value onto the end of the tracks array.
// If value is blank, delete that prop.
// Always return the entire collection object.
var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if (value !== "" && prop !== "tracks") {
    collection[id][prop] = value;
  } else if (prop === "tracks" && value !== "") {
    collection[id].tracks.push(value);
  } else if (value === "") {
    delete collection[id][prop];
  }

  return collection;
}

updateRecords(5439, "artist", "ABBA");
updateRecords(2548, "artist", "");
updateRecords(1245, "tracks", "Addicted to Love");
updateRecords(2548, "tracks", "");

// Profile LookUp
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName == firstName && contacts[i].hasOwnProperty(prop) === true) {
      return contacts[i][prop];
    } else if (contacts[i].firstName !== firstName && i == contacts.length-1) {
      return "No such contact";
    } else if (contacts[i].hasOwnProperty(prop) === false) {
      return "No such property";
    } else if (i != contacts.length-1) {
      continue;
    }
  }

}

lookUpProfile("Akira", "likes"); // should return ["Pizza", "Coding", "Brownie Points"]
lookUpProfile("Kristian", "lastName"); // should return "Vos"
lookUpProfile("Sherlock", "likes"); // should return ["Intriguing Cases", "Violin"]
lookUpProfile("Harry","likes"); // should return ["Hogwarts", "Magic", "Hagrid"]
lookUpProfile("Bob", "number"); // should return "No such contact"
lookUpProfile("Akira", "address"); // should return "No such property"
