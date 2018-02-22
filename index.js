var express = require('express');
var app = express();

app.get('/', function (req, res){
    res.sendFile('index.html', {root: __dropletTesting + "/index.html"
    });
});

app.listen(3000);


console.log("server is running on port 3000...");