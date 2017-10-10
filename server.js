const express = require('express')
const app = express()

var greetingNumb = parseInt(Math.random()*3);

if (greetingNumb == 1){
    app.get('/greet/:id', function (req, res) {
      res.send('Hello There '+ req.params.id + '!')
    })
}
else if(greetingNumb == 2){
    app.get('/greet/:id', function (req, res) {
      res.send('Nice to see you '+ req.params.id + '!')
    })
}
else{
    app.get('/greet/:id', function (req, res) {
      res.send('Greetings and salutations '+ req.params.id + '!')
    })
}

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})

app.use(express.static('public'))


