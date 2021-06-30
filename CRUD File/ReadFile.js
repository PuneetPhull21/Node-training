var fs =require('fs');

fs.readFile('Createfile.txt','utf8',function(err,data){
    if(err) throw err;
    console.log(data);
})