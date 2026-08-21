// Display global object information

console.log("=== Global Objects in Node.js ===");

// __filename
console.log("Current File:", __filename);

// __dirname
console.log("Current Directory:", __dirname);

// process.platform
console.log("Operating System:", process.platform);

// process.version
console.log("Node.js Version:", process.version);

// process.cwd()
console.log("Current Working Directory:", process.cwd());

// Read command line arguments
console.log("\n=== Command Line Arguments ===");


const args = process.argv.slice(2);

if (args.length === 0) {
    console.log("No command line arguments provided.");
} else {
    console.log("Arguments entered:");

    args.forEach((arg, index) => {
        console.log(`Argument ${index + 1}: ${arg}`);
    });
}