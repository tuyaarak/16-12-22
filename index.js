const prompt = require("prompt-sync") ({ sigint: true });

console.log("Hello! My name is bot.");
console.log("I was created in 2022.");
console.log("Please, remind me your name.");
const name = prompt();
console.log(`What a great name you have, ${name}!`);
console.log("Let me guess your age.")
console.log("Enter remainders of dividing your");
console.log("age by 3, 5 and 7.");
const reminder3 = prompt();
const reminder5 = prompt();
const reminder7 = prompt();
const age = (reminder3 * 70 + reminder5 * 21 + reminder7 * 15) % 105;
console.log(`Your age is ${age}, thats a good time to start programming.`);
