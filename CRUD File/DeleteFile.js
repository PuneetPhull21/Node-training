var fs = require('fs');
fs.unlink('CreateFile.txt',function(err){
    if(err) throw err;
    console.log("File Deleted");
})