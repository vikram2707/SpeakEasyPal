const readline = require("readline-sync");

function run() {
  console.log("\n👋 Introduction Scenario");
  console.log("Friend: 'Hi, nice to meet you! What's your name?'");

  const answer = readline.question("You: ");
  console.log(`✅ Great introduction: "${answer}"`);

  console.log("💡 Tip: Add 'Nice to meet you too!' for friendliness.");
  console.log("🌟 Encouragement: Perfect! You're building confidence in greetings.\n");
}

module.exports = { run };
