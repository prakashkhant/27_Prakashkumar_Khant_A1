const chatbot = require("./chatbot");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== College Chatbot ===");

rl.question("Ask a question (course, fees, admission, contact): ", (question) => {
    const reply = chatbot.getReply(question);
    console.log("\nBot:", reply,"\n");
    rl.close();
});