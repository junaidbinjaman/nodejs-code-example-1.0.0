var fs = require("fs");
var http = require("http");

var server = http.createServer(function (req, res) {
  if (req.url == "/") {
    fs.exists("Demo.txt", function(result) {
      if (result) {
      res.end("File Ache");
    } else {
      res.end("File Naii");
    }
    });
    
  }
});

server.listen(4040);
console.log("server run success");
