// bool
// str
// obj
// arr
// obj
// obj

const colors = new Array('red', 'green', 'blue');

const blue = colors.indexOf('blue')
// console.log(colors[blue])

const lucas = new Object();

lucas.favFood = 'pizza'
lucas.hobby = 'bbq'
lucas.town = 'orlando'
lucas.favDatatype = 'nested objects';

// console.log(lucas.hobby)

const crazyObject = {
    taco: [{
        meat: 'steak',
        cheese: ['panela', 'queso', 'chihuahua']
    },
    {
        meat: 'chicken',
        salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
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

const omg = crazyObject.taco[1].salsa[5]

const prettyGood = crazyObject.larry.quotes[0]

const swearing = crazyObject.larry.characters[2].favourtieHobby

const chicken = crazyObject.larry.nicknames[1]

const funkhauser = crazyObject.larry.characters.forEach( val => {
    if ( val.name === 'funkhauser') {
        return val.name
    }
})

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

 inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null

 