// Import the fs module
const fs = require('fs');

// Write data to a file
fs.writeFileSync('sample.txt', 'Hello, this is a sample file.');
console.log('File created successfully.');

// Read the file
const data = fs.readFileSync('sample.txt', 'utf8');
console.log('File Content:', data);

// Append data to the file
fs.appendFileSync('sample.txt', '\nThis line is appended.');
console.log('Data appended successfully.');

// Rename the file
fs.renameSync('sample.txt', 'newSample.txt');
console.log('File renamed successfully.');

// Check if file exists
if (fs.existsSync('newSample.txt')) {
    console.log('File exists.');
}

// Get file information
const stats = fs.statSync('newSample.txt');
console.log('File Size:', stats.size, 'bytes');

// Delete the file
fs.unlinkSync('newSample.txt');
console.log('File deleted successfully.');