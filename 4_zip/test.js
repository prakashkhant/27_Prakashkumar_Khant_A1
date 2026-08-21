const fs = require("fs");
const archiver = require("archiver");

const output = fs.createWriteStream("myFolder.zip");

const archive = archiver("zip");

// Connect archive to output
archive.pipe(output);

archive.directory("myFolder/", false);

archive.finalize();

// Success message
output.on("close", () => {
    console.log("ZIP file created successfully!");
});