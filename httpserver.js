var http = require("http");

var fs = require("fs");

http.createServer(function (req, res) {
    const url = req.url;
    fs.readFile("index.html", function (err,data) {
      res.writeHead(200, { "Context-Type": "text/html" });
      res.write(data);  
      res.end();
    });

    
  })
  .listen(4000);

console.log("server is running on port ");
