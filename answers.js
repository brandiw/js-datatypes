//1. the light switch would be an object, with a boolean for whether the switch is on/off
//2. email = string
//3. spaceship = object
//4. student names for a class = array
//5. student names w/ location = array of objects
//6. student names / location/ favorite show = array of objects

//take it easy
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

console.log(rainbow[4]);

// const bradley = {
// 	favoritefood: "pizza",
// 	hobby: "music",
// 	townLivedIn: "Redmond",
// 	favoriteDatatype: "objects"
// }

// 4. bradley.hobby;

//crazy object

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
      favouriteHobby: "Swearing at Larry and Jeff"
    },
    ]
  }
}

// 1. crazyObject.taco[1].salsa[5];
// 2. crazyObject.larry.quotes[0];
// 3. crazyObject.larry.characters[2].favouriteHobby;
// 4. crazyObject.larry.nicknames[1]
// 5. crazyObject.larry.characters.forEach((item)=>{
	// 	if(item.name == "funkhauser"){
	// 		console.log(item.name)
	// 	}
	// })
 



