var http = require("http");

var fs = require("fs");
const port = 4000;
http.createServer(function (req, res) {
    const url = req.url;
    fs.readFile("index.html", function (err,data) {
      res.writeHead(200, { "Context-Type": "text/html" });
      res.write(data);  
      res.end();
    });

    
  })
  
.listen(port);

console.log("server is running on port ",+port);
