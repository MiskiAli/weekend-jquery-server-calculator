// In your `server.js` handle each of the routes which will be hit via AJAX as follows:
// imports
const express = require('express');
const bodyParser = require('body-parser');
// const itemslist = require('./module/quotes.js');

// server
const app = express();
const PORT = 5000;

// Make static file

app.use(express.static('server/Public'));
app.use(bodyParser.urlencoded({extended: true}))

app.listen(PORT, function(){
    console.log('server running on port', PORT)
});



// localhost:5000/calc get and send requests
app.get('/calc', function(req,res) {
    console.log('in get calc');
    res.send(calculations);
})

app.post('/calc', (req, res) =>{
    // well where is the quote..?
    console.log('POST /calc', req.body);
    // save our quote 
    calculations.push(req.body)
    // send back response
    res.sendStatus(201);
    
    })
const calculations = [];

// // // adding function
// function addNum (numOne,numTwo){
//     return numOne + numTwo;
// }
// // addNum() //- to call it 


// // subtracting function
// function subNum (numOne,numTwo){
//     return numOne - numTwo;
// }
// // subNum()


// // multiplying function
// function multiplyNum (numOne,numTwo){
//     return numOne * numTwo;
// }
// // multiplyNum();


// // dividing function
// function divideNum (numOne,numTwo){
//     return numOne / numTwo;
// }
// // divideNum();
