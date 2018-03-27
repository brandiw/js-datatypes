// https://git.generalassemb.ly/wdi-wc-march2018/Homework/blob/master/Week_Two/Monday/JS_Datatypes.md

// DATATYPES
// Answer the Following
// For each of the following, write which datatypes you would use to represent the data, and then give a small example of the data structure:

// 1. A light switch that can be either on or off.
// boolean

// 2. A user's email address.
// string

// 3. A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// object

// 4. A list of student names from our class.
// array

// 5. A list of student names from our class, each with a location.
// object

// 6. A list of student names from our class, each with a location and each with a list of favorite tv shows.
// object

// TAKE IT EASY
// 1. Make an array that holds all of the colors of the rainbow.

const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];

// 2. Write code that will access "blue" from the rainbow array.
console.log(rainbow[4]);

// 3. Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
const jessi = {
    food: 'fish tacos',
    hobby: 'fitness classes',
    town: 'Seattle',
    datatype: 'number'
};

// 4. Write code that will access your hobby from the object that you just created.

console.log(jessi.hobby);

// CRAZY OBJECT
// . Use crazy Object to log the following.
// 1. "omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5]);

// 2. "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);

// 3. "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby);

// 4. "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);

// 5. The object the contains the name funkhauser
crazyObject.larry.characters.forEach(item => {
	if (item.name === 'funkhauser') {
		console.log(item.name);
	}
});

// OBJECT-CEPTION
inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;

// BOND FILMS
// 1. Create a new array called bondTitles with only the titles of the Bond films, and console.log the new array.

const bondTitles = bondFilms.forEach((obj) => {
    console.log(obj.title);
  });
  // 2. Create a new array oddBonds, of only the Bond films released on odd-numbered years.

  
  // 3. Determine the total cumulative gross of the Bond franchise, and console.log the result. hint To make the grosses into usable numbers, look into the .replace Javascript method (there are many ways to do this, however). Look into parseInt also.

