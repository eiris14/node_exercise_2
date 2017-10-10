const express = require('express')
const app = express()


app.use(express.static('public'))

function greeter(){
    var greeting = ["Hello There", "Nice to see you", "Greetings and salutations"];
    var greet = greeting[Math.floor(Math.random()*3)];
    
    return greet;
}


app.get('/greet/:name', function (req,res){
    
    res.send(greeter() +" "+ req.params.name);
})


app.listen(process.env.PORT || 3000, function(){
conslo.log("Express server listening on Port %d in %s mode",
this address().port, app.settings.env);
})



