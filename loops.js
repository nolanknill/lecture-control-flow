
console.group("For Loops");

// for (let i = 10; i > 0; i = i - 1) {
//     console.log(i);
// }

// console.log("Loop is done");

const dogs = [
    "Golden Retriever", 
    "Pug", 
    "German Shepherd", 
    "Dachshund",
];

for (let i = 0; i < dogs.length; i++) {
    console.log(dogs[i] + "s");
}


console.groupEnd("For Loops");


console.group("While Loops");

let i = 0;
while (i < 9) {
    console.log(i);
    i++;
}
console.log("loop is done");


const pantry = [
    "Chickpeas", 
    "Almonds", 
    "Tuna",
    "Soup",
    "Sweet Corn",
    "Kraft Dinner",
    "Chocolate"
];

while (pantry.length > 0) {
    console.log("Nom nom, this is good " + pantry.pop());
}

console.log("That was too much food");

console.groupEnd("While Loops");






console.group("break");

const players = [
    {
        name: "Kobe Bryant🐍",
        position: "Shooting Guard" 
    },
    {
        name: "Lebron James👑",
        position: "Small Forward"
    },
    {
        name: "Draymond Green👊",
        position: "Small Forward"
    }
];

// Find the first small forward in our list!
for (let i = 0; i < players.length; i++) {
    console.log(i);
    if (players[i].position === "Small Forward") {
        // We have found the first Small Forward;
        console.log(`The first small forward is: ${players[i].name}`);
        break;
    }
}


console.groupEnd("break");



console.group("Unary operator");

let originalI = 5;
const prefixI = ++originalI;

console.log("originalI: " + originalI);
console.log("prefixI: " + prefixI);

let originalJ = 5;
const postfixJ = originalJ++;

console.log("originalJ: " + originalJ);
console.log("postfixJ: " + postfixJ);

console.groupEnd("Unary operators");