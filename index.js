var express=require('express')
var app=express()
//app.use(logger('dev'))
//app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({extended:true}))
//app.use(errorHandler())

app.use(express.static(__dirname + '/public')); 

app.get('/',function(req,res){
    res.send("hi")
})



app.listen(8000,function(){
  console.log("Server is listening at 8000")
})