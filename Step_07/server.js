/**
 * Created by achintha on 10/4/16.
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var database;
var dbUrl = 'mongodb://cake_user:1qaz2wsx@ds049466.mlab.com:49466/cake_it_workshop'

MongoClient.connect(dbUrl, function (err, db) {
    if (err) {
        return console.log(err);
    }
    database = db;
    app.listen(3000, function () {
        console.log('Demo Listening on 3030');
    })
});

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/register', function (req, res) {
    database.collection('students').save(req.body, function (err, result) {
        if (err) {
            return console.log(err);
        }
        console.log('Student saved to database');
        res.redirect('/');
    })
});