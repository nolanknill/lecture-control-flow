console.group("If statements");

/* 
    Task: Write a program that tells us
          if a number is positive or
          negative
*/

// Test cases: Positive, Negative, 0
let number = 0;
let result = "";

if (number > 0) {
    result = "positive";
} else if (number < 0) {
    result = "negative";
} else {
    result = "neither"
}

console.log(`${number} is ${result}`);

console.groupEnd("If statements");


console.group("Switch statements");

/*
"Burger" -> 10;
"Pad Thai" -> 10
"Broccoli" -> 7
"Kale" -> 4
"Fermented Olives on Pizza" -> 2 
*/

let foodItem = "Broccoli";

switch (foodItem) {
    case "Fermented Olives on Pizza":
        console.log(`I rate ${foodItem} a 2`);
        break;
    case "Kale":
        console.log(`I rate ${foodItem} a 4`);
        break;
    case "Broccoli":
        console.log(`I rate ${foodItem} a 7`);
        break;
    case "Pad Thai":
    case "Burger":
        console.log(`I rate ${foodItem} a 10`);
        break;
    default:
        console.log(`I have no opinion on ${foodItem}`);
        break;           
}



console.groupEnd("Switch statements");
