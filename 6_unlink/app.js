const fs = require("fs");
const util = require("util");

const unlinkFile = util.promisify(fs.unlink);

async function deleteFile() {
    try{
        await unlinkFile("sample.txt");
        console.log("File deleted sucessfully");
        
    }
    catch(err){
        console.log("error : ",err.message);
    }
    

}
deleteFile();