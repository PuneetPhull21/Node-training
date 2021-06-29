var fs = require('fs');

fs.writeFile('Createfile.txt','Netsmartz Training Program of Node . js',function(err){
    if(err) throw err;
    console.log('File Is Created Successfully');
})



