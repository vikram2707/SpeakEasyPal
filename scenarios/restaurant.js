const readline = require("readline-sync");

function run() {
  console.log("\n🍽️ Restaurant Scenario");
  console.log("Waiter: 'What would you like to order?'");

  const answer = readline.question("You: ");
  console.log(`✅ Great! You said: "${answer}"`);

  console.log("💡 Tip: Try saying 'Can I have a bottle of pepsi, please?' for natural conversation.");
  console.log("🌟 Encouragement: i am not listening but you are doing great!");
}

module.exports = { run };
