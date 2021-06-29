var fs =require('fs');

fs.rename('Createfile.txt','CreateFile.txt',function(err){
    if(err) throw err;
    console.log("File Renamed");
})
