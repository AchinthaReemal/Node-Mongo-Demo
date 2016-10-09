/**
 * Created by achintha on 10/4/16.
 */

var express = require('express');
var app = express();

app.listen(3000, function () {
    console.log('Demo listening on port 3000');
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});