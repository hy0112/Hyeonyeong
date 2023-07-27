
// figlet 
/* 
var figlet = require("figlet");

figlet("Hyeon", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
*/

// express 포트 3000번 
const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.send('Hello World!!')
})


app.get ('/dog', (req,res)=>{
    res.send('개')
})


app.get ('/cat', (req,res)=>{
    res.send('고양이')
})

app.get ('/pig', (req,res)=>{
    res.send('돼지')
})

app.listen(port, () => {
    console.log('Example app listening on port $(port)')
});




