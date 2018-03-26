//Datatypes
// A light switch that can be either on or off.
//Answer: boolean
// A user's email address.
//Answer: string
// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
//Answer: object
// A list of student names from our class.
//Answer: array
// A list of student names from our class, each with a location.
//Answer: object
// A list of student names from our class, each with a location and each with a list of favorite tv shows.
//Answer object with nested arrays

//Take it Easy
// Make an array that holds all of the colors of the rainbow.
const rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// Write code that will access "blue" from the rainbow array.
console.log(rainbow[rainbow.indexOf("blue")])
// Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
const gil = {
	food: "avocado",
	hobby: "jiu-jitsu",
	town: "Seattle",
	datatype: "undefined"
}
// Write code that will access your hobby from the object that you just created.
gil.printHobby = function() {
	console.log(this.hobby);
}
gil.printHobby();

//Crazy Object!
const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
      name: "Jeff",
      occupation: "manager"
    },
    {
      name: "funkhauser",
      occupation: "tv dude"
    },
    {
      name: "susie",
      occupation: "jeffs wife",
      favourtieHobby: "Swearing at Larry and Jeff"
    },
    ]
  }
}

// Use crazy Object to log the following.
// "omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5])
// "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0])
// "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby)
// "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1])
// The object the contains the name funkhauser
console.log(crazyObject.larry.characters[1])







