
// var http = require('http');
// var fs = require('fs');
    
//   var server = http.createServer(function(req, res) {  
//       console.log("Request was made: " + req.url)
//         res.writeHeader(200, {"Content-Type": "text/html"});  
//         var myReadStream = fs.createReadStream('./ui/login.html');
//         myReadStream.pipe(res);
//     });

// server.listen(8080, 'localhost');
// console.log("Listening intently to port 8080");

var express= require('express')
var app = express()

 // so can import images & CSS
app.use(express.static('./'))  // security risk? -Jess

app.get('/',function(req,res){
  res.sendFile('./ui/login.html',{ root:__dirname })
})

app.listen(3210)
console.log("Listening intently to port 3210");