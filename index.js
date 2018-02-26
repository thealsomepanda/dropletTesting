
// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const validator = require('express-validator');

const app = express();

// This handles request and respond functions, currently sends user to index.html
app.get('/', function (req, res){
    res.sendFile('index.html', {root: __dirname + "/webPages"
    });
});

app.get('/formPage', function (req, res){
    res.sendFile('formPage.html', {root: __dirname +"/webPages"
    });
});

app.listen(3000);

console.log("server is running on port 3000...");
