var fs =require('fs');

fs.readFile('Createfile.txt',function(err,data){
    if(err) throw err;
    console.log(data);
})