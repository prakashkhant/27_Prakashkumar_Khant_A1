const AdmZip = require("adm-zip");

const zip = new AdmZip("myFolder.zip");

// Extract all files 
zip.extractAllTo("ExtractedFiles", true);

console.log("ZIP file extracted successfully!");