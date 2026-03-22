const readline = require("readline-sync");
const restaurant = require("./scenarios/restaurant");
const interview = require("./scenarios/interview");
const introduction = require("./scenarios/introduction");

console.log("✨ Welcome to SpeakEasyPal ✨");
console.log("Tagline: 'Speak easily, learn freely.'");
console.log("Created by Vikramaditya (age 9) with Copilot’s help.\n");

console.log("Choose a role-play scenario:");
console.log("1. Restaurant");
console.log("2. Interview");
console.log("3. Introduction");

const choice = readline.question("Enter your choice (1-3): ");

switch (choice) {
  case "1":
    restaurant.run();
    break;
  case "2":
    interview.run();
    break;
  case "3":
    introduction.run();
    break;
  default:
    console.log("Invalid choice. Please restart and pick 1-3.");
}
