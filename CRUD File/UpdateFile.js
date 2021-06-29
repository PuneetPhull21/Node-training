var fs =require('fs');
fs.appendFile('Createfile.txt','File is Updated',function(err){
    if(err) throw err;
    console.log("file is Updated");
})