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

