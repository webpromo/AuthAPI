
var express= require('express')
var app = express()

 // so can import images & CSS
app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
  res.sendFile('./ui/login.html',{ root:__dirname })
})
app.get('/register.html',function(req,res){
  res.sendFile('./ui/register.html',{ root:__dirname })
})
app.get('/pw-recovery.html',function(req,res){
  res.sendFile('./ui/pw-recovery.html',{ root:__dirname })
})

app.listen(3210)
console.log("Listening intently to port 3210");