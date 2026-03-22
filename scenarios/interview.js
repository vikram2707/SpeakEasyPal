const readline = require("readline-sync");

function run() {
  console.log("\n💼 Interview Scenario");
  console.log("Interviewer: 'Tell me about yourself.'");

  const answer = readline.question("You: ");
  console.log(`✅ Nice response: "${answer}"`);

  console.log("💡 Tip: Start with 'I am...' or 'My name is...' to sound confident.");
  console.log("🌟 Encouragement: Excellent effort! You're learning to present yourself well.\n");
}

module.exports = { run };
