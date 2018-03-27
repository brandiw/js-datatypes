var light_switch = true;
console.log(light_switch);

var email = "hav206@yahoo.com"
console.log(email);

var spaceship = {hull : "round", laserBlaster: "energy", tractorBeam: "beam", warpDrive: "6-engines"};

//var listOfName = {last : "Ha", first : "van"}

function listOfName (lastName, firstName)
{
	this.lastName = lastName;
	this.firstName = firstName;
}

 var myname = new listOfName("van", "Ha");
 console.log(myname);
 var jack = new listOfName("Jack", "Pound");

listOfClassName = [];

listOfClassName.push(myname);
listOfClassName.push(jack);

console.log(listOfClassName);

function listOfName1 (firstname, lastname, location)
{
	this.firstname = firstname;
	this.lastname = lastname;
	this.location = location;
}

var listOfClassName1 = [];

var nameMe = new listOfName1("ha", "van", "lynnwood");
var jackName = new listOfName1("Pound", "Jack", "Seattle");
listOfClassName1.push(nameMe);
listOfClassName1.push(jackName);

console.log(listOfClassName1);

var rainbow = ["blue", "orange", "green", "red", "white"];

for (var i = 0; i < rainbow.length; i++){
	if (rainbow[i] === "blue")
		console.log(rainbow[i]);
		///return rainbow[i];
	//return -1;
}

//console.log("test");
var obj = {food : "Pho", hobby : "FootBall", town: "lynnwood", data : "string"};
console.log(Object.keys(obj)[1]);
console.log(Object.keys(obj));
console.log(Object.values(obj)[1]);

///////////////////////////////////////////////////////////////

const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}

console.log(Object.keys(inception));
console.log(Object.values(inception));

//////////////////////////////////////////////////////////////


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

console.log(crazyObject.taco[1].salsa[5]);
console.log(crazyObject.larry.quotes[0]);
console.log(crazyObject.larry.characters[2].favourtieHobby);
console.log(crazyObject.larry.nicknames[1]);
console.log(crazyObject.larry.characters[1].name);

const inception1 = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}

console.log(inception1.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null);

const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "5,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "285,157,191" }
];

let arrayOfTitle = [];
var mytitle =  bondFilms[0].title;
console.log(mytitle);
for(var i = 0; i < bondFilms.length; i++){
	if(bondFilms[i] !== ""){
		arrayOfTitle.push(bondFilms[i].title);
	}
}
console.log(arrayOfTitle);


var oddYear = bondFilms[0].year;
var addArray = [];
console.log(oddYear);
for (let i = 0;i < bondFilms.length;i++){
	if(bondFilms[i].year % 2 !== 0){
		addArray.push(bondFilms[i].year);
	}
}
console.log(addArray);
console.log(bondFilms[0].gross.replace(/,/g,''));
var gross = parseInt(bondFilms[0].gross)
console.log(gross);
let total = 0;
for (let i = 0; i < bondFilms.length; i++)
{
	//let total = 0;
	let temp = (bondFilms[i].gross.replace(/,/g,''));
	let numb = parseInt(temp);
	total += (numb/ bondFilms.length);
}
console.log(total);


   