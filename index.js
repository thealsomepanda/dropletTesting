
// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const validator = require('express-validator');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// This handles request and respond functions, currently sends user to index.html
app.get('/', function (req, res){
    res.sendFile('index.html', {root: __dirname + "/webPages"
    });
});
// Sends user to formPage.html
app.get('/formPage', function (req, res){
    res.sendFile('formPage.html', {root: __dirname +"/webPages"
    });
});

// tells the server what port to listen to and prints to the console
app.listen(3000);
console.log("server is running on port 3000...");

// this handles the form on formPage.html
app.post('/formPage', function (req, res) {
    res.send('You sent the name "' + res.body.name_field + '".');
});