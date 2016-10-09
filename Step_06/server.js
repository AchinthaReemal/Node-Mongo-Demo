/**
 * Created by achintha on 10/4/16.
 */

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function () {
    console.log('Demo listening on port 3000');
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/register', function (req, res) {
    console.log(req.body)
});